import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    // Add smooth scroll class
    document.documentElement.classList.add('smooth-scroll');

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      // Parallax for sections
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        
        // Only apply to background elements
        const bg = section.querySelector('.hero-grid-pattern, .spline-background-warroom');
        if (bg) {
          bg.style.transform = `translateY(${yPos * 0.05}px)`;
        }
      });

      // Fade in elements on scroll
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('visible');
        }
      });
    };

    // Custom cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    document.body.appendChild(cursorDot);

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';
    };

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .metric-card, .timeline-card, .mission-card');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
      });
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', moveCursor, { passive: true });

    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
      document.body.removeChild(cursorDot);
    };
  }, []);
};

export default useSmoothScroll;
