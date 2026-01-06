import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    document.documentElement.classList.add('smooth-scroll');

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        
        const bg = section.querySelector('.hero-grid-pattern, .spline-background-warroom, .spline-background-bio');
        if (bg) {
          bg.style.transform = `translateY(${yPos * 0.05}px)`;
        }
      });

      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('visible');
        }
      });
    };

    // Enhanced cursor with ripple effect
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

    // Click ripple effect
    const createRipple = (e) => {
      const ripple = document.createElement('div');
      ripple.className = 'click-ripple';
      ripple.style.left = e.clientX + 'px';
      ripple.style.top = e.clientY + 'px';
      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    const interactiveElements = document.querySelectorAll('button, a, .metric-card, .timeline-card, .mission-card, .community-photo');
    
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
    window.addEventListener('click', createRipple, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('click', createRipple);
      document.body.removeChild(cursor);
      document.body.removeChild(cursorDot);
    };
  }, []);
};

export default useSmoothScroll;
