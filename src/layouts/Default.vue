<template>
    <div>
        <script
            src="//instant.page/5.1.0"
            type="module"
            integrity="sha384-by67kQnR+pyfy8yWP4kPO12fHKRLHZPfEsiSXR8u2IKcTdxD805MGUXBzVPnkLHw"
            crossorigin="anonymous"
        ></script>
        <a class="visually-hidden" href="#main">Skip to content</a>
        <div
            class="fixed top-0 bottom-0 left-0 right-0 z-10 w-full h-full border-8 border-gray-400 pointer-events-none"
        ></div>
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
        ResponsiveNav,
    },
    data() {
   return {
     jsonld:  {
        "@context": "https://schema.org/",
        "@type": "Person",
        "name": "Charles E. Amyx, III",
        "url": "https://charlesamyx.com",
        "image": "https://charlesamyx.com/charles_amyx.jpg",
        "sameAs": "https://www.linkedin.com/in/charbot/",
        "jobTitle": "Senior Web Designer",
        "worksFor": {
            "@type": "Organization",
            "name": "University of Michigan"
        }  
        }
    }
    },
    metaInfo() {
    return {
        script: [
            { innerHTML: JSON.stringify(this.jsonld), type: 'application/ld+json' }
        ]
    }
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