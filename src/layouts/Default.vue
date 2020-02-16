<template>
  <div>
    <a class="visually-hidden" href="#main">Skip to content</a>
    <div class="absolute top-0 bottom-0 left-0 right-0 md:border-8 md:border-dark-indigo"></div>   
    <div id="wrapper" class="relative flex flex-col min-h-screen pb-16 wrapper md:pb-0">
      <HeaderPartial />

      <transition name="fade" appear>
        <main id="main" class="flex flex-col flex-1 py-10 main inner lg:py-20">
          <slot />
        </main>
      </transition>
      <FooterPartial />
    </div>

    <ClientOnly>
      <ResponsiveNav />
    </ClientOnly>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import HeaderPartial from "~/layouts/partials/Header.vue";
import FooterPartial from "~/layouts/partials/Footer.vue";
import ResponsiveNav from "~/layouts/partials/ResponsiveNav.vue";

export default {
  components: {
    HeaderPartial,
    FooterPartial,
    ResponsiveNav
  }
};
</script>

<style>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>