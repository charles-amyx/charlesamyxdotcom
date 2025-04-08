import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'

// Export a setup function that the integration will call
export default function () {
  // Register plugins
  Alpine.plugin(intersect)
  return Alpine
} 