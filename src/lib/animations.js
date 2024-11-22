export function initImageAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });
  
    document.querySelectorAll('figure').forEach(figure => {
      figure.classList.add('fade-up');
      observer.observe(figure);
    });
  }