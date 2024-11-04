/// <reference path="../.astro/types.d.ts" />

interface Window {
  Alpine: any;
}

declare module '@alpinejs/intersect' {
  const intersect: any;
  export default intersect;
}