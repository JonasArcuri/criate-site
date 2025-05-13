
import React, { useEffect, useRef, useCallback } from 'react';

const ScrollObserver = ({ children }) => {
  const observer = useRef(null);

  const handleIntersect = useCallback((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-animate-visible');
        observer.current.unobserve(entry.target); 
      }
    });
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 
    });

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.current.observe(el));

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [handleIntersect, children]); // Rerun if children change to re-observe

  return <>{children}</>;
};

export default ScrollObserver;
