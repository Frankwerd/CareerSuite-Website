import { useEffect, useState, useRef, RefObject } from 'react';

interface ScrollFadeInOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

function useScrollFadeIn<T extends HTMLElement>(
  options?: ScrollFadeInOptions
): [RefObject<T | null>, boolean] {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T | null>(null);

  const defaultOptions: ScrollFadeInOptions = {
    threshold: 0.1,
    rootMargin: '0px',
    triggerOnce: true,
    ...options,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (defaultOptions.triggerOnce && elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          } else {
            if (!defaultOptions.triggerOnce) {
              setIsVisible(false);
            }
          }
        });
      },
      {
        threshold: defaultOptions.threshold,
        rootMargin: defaultOptions.rootMargin,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [defaultOptions.threshold, defaultOptions.rootMargin, defaultOptions.triggerOnce]);

  return [elementRef, isVisible];
}

export default useScrollFadeIn;
