'use client';

import React, { useEffect, useState } from 'react';
// motion can be removed if not used for the rectangle, but keeping it doesn't harm for this test
// import { motion } from 'framer-motion';

const ConnectingLinesAnimation: React.FC = () => {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [debugMessage, setDebugMessage] = useState<string>('Initializing...');

  useEffect(() => {
    const parentElement = document.getElementById('hero-animation-container');

    if (parentElement) {
      const updateSize = () => {
        const rect = parentElement.getBoundingClientRect();
        const newWidth = rect.width;
        const newHeight = rect.height;

        if (newWidth > 0 && newHeight > 0) {
          setContainerSize({ width: newWidth, height: newHeight });
          const msg = `Container: ${newWidth.toFixed(0)}x${newHeight.toFixed(0)}`;
          setDebugMessage(msg);
          console.log(`[ConnectingLinesAnimation] ${msg}`);
        } else {
          const offsetWidth = parentElement.offsetWidth;
          const offsetHeight = parentElement.offsetHeight;
          if (offsetWidth > 0 && offsetHeight > 0) {
            setContainerSize({ width: offsetWidth, height: offsetHeight });
            const msg = `Container (offset): ${offsetWidth.toFixed(0)}x${offsetHeight.toFixed(0)}`;
            setDebugMessage(msg);
            console.log(`[ConnectingLinesAnimation] ${msg}`);
          } else {
            const msg = `Parent found, but W/H is zero. Rect W: ${newWidth.toFixed(0)}, H: ${newHeight.toFixed(0)}. Offset W: ${offsetWidth.toFixed(0)}, H: ${offsetHeight.toFixed(0)}`;
            setDebugMessage(msg);
            console.warn(`[ConnectingLinesAnimation] ${msg}`);
          }
        }
      };

      requestAnimationFrame(updateSize);

      const resizeObserver = new ResizeObserver(() => {
        requestAnimationFrame(updateSize);
      });
      resizeObserver.observe(parentElement);

      const timeoutId = setTimeout(() => requestAnimationFrame(updateSize), 150);

      return () => {
        clearTimeout(timeoutId);
        if (parentElement) {
          resizeObserver.unobserve(parentElement);
        }
        resizeObserver.disconnect();
      };
    } else {
      const msg = 'hero-animation-container ID not found.';
      setDebugMessage(msg);
      console.error(`[ConnectingLinesAnimation] ${msg}`);
    }
  }, []);

  if (containerSize.width === 0 || containerSize.height === 0) {
    return (
      <div
        style={{
          width: '100%',
          height: '300px', // Give placeholder a fixed height to be seen
          position: 'absolute',
          top: 0,
          left: 0,
          border: '2px solid red',
          backgroundColor: 'rgba(255, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          color: 'red',
          padding: '10px',
          boxSizing: 'border-box',
          zIndex: 1000 // Ensure placeholder is very visible
        }}
      >
        <p>[DEBUG] Animation Placeholder Active</p>
        <p>Status: {debugMessage}</p>
        <p>Expected parent ID: hero-animation-container</p>
        <p>Container W: {containerSize.width.toFixed(0)} H: {containerSize.height.toFixed(0)}</p>
      </div>
    );
  }

  return (
    <svg
      width="100%"
      height="100%"
      style={{
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0, // Correct z-index for background
        backgroundColor: 'rgba(0, 255, 0, 0.3)', // Bright green, semi-transparent background
        border: '2px solid darkgreen' // Border for the SVG area itself
      }}
      aria-hidden="true"
      viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
    >
      <rect
        x={containerSize.width * 0.1} // 10% inset
        y={containerSize.height * 0.1} // 10% inset
        width={containerSize.width * 0.8} // 80% width
        height={containerSize.height * 0.8} // 80% height
        fill="rgba(255, 0, 255, 0.5)" // Bright magenta, semi-transparent
      />
      <text
        x="10" y="20"
        fill="black"
        fontSize="12px"
        fontFamily="monospace"
      >
        SVG TEST VISIBLE - W:{containerSize.width.toFixed(0)} H:{containerSize.height.toFixed(0)}
      </text>
    </svg>
  );
};

export default ConnectingLinesAnimation;
