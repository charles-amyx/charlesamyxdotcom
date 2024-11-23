export function initViewTransitions() {
  if (!document.startViewTransition) return;

  document.addEventListener('astro:before-swap', () => {
    // Add loading state
    document.documentElement.classList.add('loading');
  });

  document.addEventListener('astro:after-swap', () => {
    // Remove loading state
    document.documentElement.classList.remove('loading');
  });
} 