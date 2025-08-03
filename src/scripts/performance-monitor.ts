// Performance monitoring and Core Web Vitals tracking
export class PerformanceMonitor {
  private clsValue = 0;
  private clsEntries: PerformanceEntry[] = [];
  private lcpValue = 0;
  private fidValue = 0;

  constructor() {
    this.initObservers();
    this.setupVisibilityListener();
  }

  private initObservers() {
    if (!('PerformanceObserver' in window)) return;

    // Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.lcpValue = lastEntry.startTime;
      
      this.reportMetric('LCP', Math.round(this.lcpValue));
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        const fidEntry = entry as any;
        this.fidValue = fidEntry.processingStart - entry.startTime;
        this.reportMetric('FID', Math.round(this.fidValue));
      }
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        const clsEntry = entry as any;
        if (!clsEntry.hadRecentInput) {
          this.clsValue += clsEntry.value;
          this.clsEntries.push(entry);
        }
      }
    }).observe({ entryTypes: ['layout-shift'] });
  }

  private setupVisibilityListener() {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.reportMetric('CLS', Math.round(this.clsValue * 1000) / 1000);
      }
    });
  }

  private reportMetric(name: string, value: number) {
    // Send to Google Analytics
    const gtag = (window as any).gtag;
    if (typeof gtag !== 'undefined') {
      gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: name,
        value: value
      });
    }

    // Log to console in development
    if (import.meta.env.DEV) {
      console.log(`Core Web Vital - ${name}: ${value}`);
    }

    // Store in localStorage for tracking
    const metrics = JSON.parse(localStorage.getItem('webVitals') || '{}');
    metrics[name] = value;
    localStorage.setItem('webVitals', JSON.stringify(metrics));
  }

  // Get current metrics
  getMetrics() {
    return {
      LCP: this.lcpValue,
      FID: this.fidValue,
      CLS: this.clsValue
    };
  }

  // Check if metrics meet Core Web Vitals thresholds
  checkThresholds() {
    const thresholds = {
      LCP: { good: 2500, needsImprovement: 4000 },
      FID: { good: 100, needsImprovement: 300 },
      CLS: { good: 0.1, needsImprovement: 0.25 }
    };

    const results: Record<string, { value: number; status: string }> = {};

    Object.entries(thresholds).forEach(([metric, threshold]) => {
      const metrics = this.getMetrics();
      const value = metrics[metric as keyof typeof metrics];
      let status = 'good';
      
      if (value > threshold.needsImprovement) {
        status = 'poor';
      } else if (value > threshold.good) {
        status = 'needs-improvement';
      }

      results[metric] = { value, status };
    });

    return results;
  }
}

// Initialize performance monitoring
export function initPerformanceMonitoring() {
  return new PerformanceMonitor();
} 