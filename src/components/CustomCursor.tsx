import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      cursorDot.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
    };

    window.addEventListener('mousemove', moveCursor);

    const handleMouseEnter = () => {
      cursor.classList.remove('opacity-0');
      cursorDot.classList.remove('opacity-0');
    };

    const handleMouseLeave = () => {
      cursor.classList.add('opacity-0');
      cursorDot.classList.add('opacity-0');
    };

    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Handle hover effects on interactive elements
    const handleLinks = () => {
      const links = document.querySelectorAll('a, button');
      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          cursor.classList.add('scale-150');
          cursorDot.classList.add('opacity-0');
        });
        link.addEventListener('mouseleave', () => {
          cursor.classList.remove('scale-150');
          cursorDot.classList.remove('opacity-0');
        });
      });
    };

    handleLinks();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 w-8 h-8 border-2 border-orange-500 rounded-full -ml-4 -mt-4 transition-all duration-200 ease-out opacity-0"
      />
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-50 w-1 h-1 bg-orange-500 rounded-full -ml-0.5 -mt-0.5 transition-opacity duration-200 ease-out opacity-0"
      />
    </>
  );
};

export default CustomCursor;