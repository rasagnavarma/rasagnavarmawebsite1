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
        
        const bg = section.querySelector('.hero-grid-pattern, .spline-background-warroom, .spline-background-bio, .spline-background-timeline');
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

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useSmoothScroll;
