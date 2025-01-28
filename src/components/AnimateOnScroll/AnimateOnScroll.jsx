import { useEffect, useRef, useState } from 'react';
import './AnimateOnScroll.scss';

const AnimateOnScroll = ({ children, animation = 'fade-up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`animate-on-scroll ${animation} ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll; 