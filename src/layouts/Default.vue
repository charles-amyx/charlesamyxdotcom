<template>
  <div>
    <a class="visually-hidden" href="#main">Skip to content</a>
    <div class="fixed top-0 bottom-0 left-0 right-0 z-10 w-full h-full border-8 pointer-events-none border-dark-indigo"></div>   
    <div id="wrapper" class="relative flex flex-col min-h-screen wrapper">
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
    <div class="fixed bottom-0 right-0 z-50 hidden px-6 py-4 mb-4 mr-4 text-xs text-center rounded-sm shadow-2xl bg-soft-white" id="swRefresh">
    <div class="mb-4 text-xs">New content is available!</div>
    <button class="px-4 py-2 mx-auto text-xs font-bold text-white uppercase bg-black rounded-lg" onClick="window.location.reload();">Reload</button>
</div>
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