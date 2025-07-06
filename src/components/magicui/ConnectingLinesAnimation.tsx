'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Dot {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Line {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  type: 'dot-to-dot' | 'dot-to-cursor';
}

interface RectDimensions {
  x: number; 
  y: number; 
  width: number;
  height: number;
}

const ConnectingLinesAnimation: React.FC = () => {
  const [containerSize, setContainerSize] = useState<RectDimensions | null>(null);
  const [dots, setDots] = useState<Dot[]>([]);
  const [lines, setLines] = useState<Line[]>([]);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  
  const animationFrameId = useRef<number | null>(null);
  const animationContainerRef = useRef<HTMLDivElement | null>(null);
  
  // Moved dotsRef and its updater useEffect to the top level
  const dotsRef = useRef(dots);
  useEffect(() => {
    dotsRef.current = dots;
  }, [dots]);

  const numDots = 48;
  const dotSpeed = 0.35; 
  const dotToDotConnectionRadius = 90; 
  const dotToCursorConnectionRadius = 160;

  // Effect for size detection
  useEffect(() => {
    const parentElement = document.getElementById('hero-animation-container') as HTMLDivElement;
    if (parentElement) {
      animationContainerRef.current = parentElement;
      const updateSize = () => {
        const rect = parentElement.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setContainerSize({ x: rect.left, y: rect.top, width: rect.width, height: rect.height });
        }
      };
      requestAnimationFrame(updateSize);
      const resizeObserver = new ResizeObserver(() => requestAnimationFrame(updateSize));
      resizeObserver.observe(parentElement);
      const timeoutId = setTimeout(() => requestAnimationFrame(updateSize), 200);
      return () => { 
        clearTimeout(timeoutId);
        if (parentElement) resizeObserver.unobserve(parentElement); 
        resizeObserver.disconnect(); 
      };
    }
  }, []);

  // Effect to track mouse position using window events
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!animationContainerRef.current || !containerSize) {
        setMousePosition(null); 
        return;
      }
      const rect = animationContainerRef.current.getBoundingClientRect(); 
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        setMousePosition({ x, y });
      } else {
        setMousePosition(null); 
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [containerSize]); // containerSize includes x,y of the container, so if that moves, rect needs re-eval

  // Effect to generate dots in quadrants
  useEffect(() => {
    if (containerSize && containerSize.width > 0 && containerSize.height > 0) {
      const { width, height } = containerSize;
      const dotsPerQuadrant = Math.floor(numDots / 4);
      const newDots: Dot[] = [];
      const genQuadrant = (xOff: number, yOff: number, w: number, h: number, count: number, prefix: string) => {
        for (let i = 0; i < count; i++) newDots.push({ id: `dot-${prefix}-${i}`, x: xOff + Math.random()*w, y: yOff + Math.random()*h, vx: (Math.random()-0.5)*2*dotSpeed, vy: (Math.random()-0.5)*2*dotSpeed });
      };
      genQuadrant(0, 0, width/2, height/2, dotsPerQuadrant, 'tl');
      genQuadrant(width/2, 0, width/2, height/2, dotsPerQuadrant, 'tr');
      genQuadrant(0, height/2, width/2, height/2, dotsPerQuadrant, 'bl');
      genQuadrant(width/2, height/2, width/2, height/2, numDots - (dotsPerQuadrant*3), 'br');
      setDots(newDots); // This will trigger the useEffect that updates dotsRef
    }
  }, [containerSize, numDots, dotSpeed]);

  // Effect for animating dots and calculating lines
  useEffect(() => {
    if (!containerSize || containerSize.width === 0 || containerSize.height === 0) {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      return;
    }
    
    let isActive = true;
    const animate = () => {
      if (!isActive) return;

      // Update dot positions using the functional update form of setDots
      // This ensures we're always working with the latest dot state
      setDots(prevDots => 
        prevDots.map(dot => {
          let newX = dot.x + dot.vx; let newY = dot.y + dot.vy;
          let newVx = dot.vx; let newVy = dot.vy;
          if (newX <= 0 || newX >= containerSize.width) { newVx *= -1; newX = Math.max(0, Math.min(newX, containerSize.width)); }
          if (newY <= 0 || newY >= containerSize.height) { newVy *= -1; newY = Math.max(0, Math.min(newY, containerSize.height)); }
          return { ...dot, x: newX, y: newY, vx: newVx, vy: newVy };
        })
      );
      
      // Line calculation will use dotsRef.current, which is updated by its own useEffect
      // This decouples line calculation slightly from the direct setDots call in this RAF,
      // ensuring that line calculations are based on the state that React has fully processed for the dots.
      const currentDots = dotsRef.current; 
      const newLines: Line[] = [];

      if (currentDots) { // Check if dotsRef.current is populated
        for (let i = 0; i < currentDots.length; i++) {
          for (let j = i + 1; j < currentDots.length; j++) {
            const d1 = currentDots[i]; const d2 = currentDots[j];
            const distance = Math.sqrt(Math.pow(d1.x - d2.x, 2) + Math.pow(d1.y - d2.y, 2));
            if (distance < dotToDotConnectionRadius) {
              newLines.push({ id: `line-d2d-${d1.id}-${d2.id}`, x1: d1.x, y1: d1.y, x2: d2.x, y2: d2.y, type: 'dot-to-dot' });
            }
          }
        }
        if (mousePosition) {
          for (const dot of currentDots) {
            const distanceToMouse = Math.sqrt(Math.pow(dot.x - mousePosition.x, 2) + Math.pow(dot.y - mousePosition.y, 2));
            if (distanceToMouse < dotToCursorConnectionRadius) {
              newLines.push({ id: `line-cursor-${dot.id}`, x1: dot.x, y1: dot.y, x2: mousePosition.x, y2: mousePosition.y, type: 'dot-to-cursor' });
            }
          }
        }
      }
      setLines(newLines);
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);
    return () => { isActive = false; if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current); };
  }, [containerSize, mousePosition, dotToDotConnectionRadius, dotToCursorConnectionRadius, dotSpeed, numDots]); // Removed 'dots' from here, rely on dotsRef


  if (!containerSize || containerSize.width === 0 || containerSize.height === 0) {
    return ( <div style={{width:'100%',height:'100%',minHeight:'50px',border:'1px dotted gray',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'10px',color:'gray'}}><p>Animation Area Initializing...</p></div> );
  }
  
  return (
    <svg 
      width="100%" height="100%" 
      style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.0)' }}
      aria-hidden="true"
    >
      <motion.rect x="0" y="0" width="100%" height="100%" fill="transparent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} /> 
      
      <AnimatePresence>
        {lines.map(line => (
          <motion.line
            key={line.id}
            x1={line.x1} y1={line.y1}
            x2={line.x2} y2={line.y2}
            stroke={line.type === 'dot-to-cursor' ? "rgba(120, 120, 220, 0.45)" : "rgba(150, 150, 150, 0.2)"}
            strokeWidth={line.type === 'dot-to-cursor' ? "1" : "0.5"}
            initial={{ opacity: 0, pathLength: line.type === 'dot-to-cursor' ? 0 : 1 }}
            animate={{ opacity: 1, pathLength: 1 }}
            exit={{ opacity: 0, pathLength: line.type === 'dot-to-cursor' ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </AnimatePresence>

      {dots.map(dot => (
        <motion.circle
          key={dot.id}
          cx={dot.x} cy={dot.y}
          r="2" 
          fill="rgba(100, 100, 180, 0.65)"
        />
      ))}
    </svg>
  );
};

export default ConnectingLinesAnimation;
