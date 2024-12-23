// Canvas animation state
interface AnimationState {
  time: number;
  animationFrameId?: number;
}

export function initTopography() {
  const canvas = document.getElementById('topographyCanvas') as HTMLCanvasElement;
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;
  
  const state: AnimationState = {
    time: 0
  };

  function setCanvasSize() {
    // Get the container's computed dimensions
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    // Set the canvas size in CSS pixels
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    
    // Set the canvas internal dimensions
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);
    
    // Reset the context scale
    if (ctx) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, rect.width, rect.height);
    }
  }
  
  function animate() {
    if (!canvas || !ctx) return;
    
    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
    
    // Draw multiple sine waves
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      const opacity = 0.25 + (i * 0.35);
      ctx.strokeStyle = `rgba(238, 244, 246, ${opacity})`;
      ctx.lineWidth = 0.5 + (i * 0.2);
      
      const speedMultiplier = 1 + (i * 0.4);
      
      for (let x = 0; x < rect.width; x++) {
        const y = Math.sin(x * 0.01 + (state.time * speedMultiplier) + i) * 20 + 
                 Math.sin(x * 0.02 + (state.time * 0.8 * speedMultiplier) + i) * 15 +
                 (rect.height / 2) + (i * 50);
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      ctx.stroke();
    }
    
    state.time += 0.005;
    state.animationFrameId = requestAnimationFrame(animate);
  }

  // Initialize and start animation
  function start() {
    if (state.animationFrameId) {
      cancelAnimationFrame(state.animationFrameId);
    }
    setCanvasSize();
    animate();
  }

  // Handle resize
  const resizeObserver = new ResizeObserver(() => {
    start();
  });
  
  resizeObserver.observe(canvas);

  // Initial start with a slight delay to ensure proper sizing
  requestAnimationFrame(() => {
    start();
  });

  // Cleanup function
  return () => {
    if (state.animationFrameId) {
      cancelAnimationFrame(state.animationFrameId);
    }
    resizeObserver.disconnect();
  };
} 