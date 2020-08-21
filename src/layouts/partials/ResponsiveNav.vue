<template>
    <div>
        <nav
            id="mobile-nav"
            class="fixed top-0 left-0 z-50 flex flex-col justify-center w-full h-screen overflow-y-auto mobile-nav md:hidden"
            :class="toggleNav ? 'menu-visible': ''"
        >
            <ul class="text-center">
                <li
                    class="mb-4 level-1 md:mr-4 md:mb-0"
                    v-for="element in $static.metadata.mobileMenu"
                    :key="element.name"
                >
                    <g-link
                        :to="element.link"
                        class="block py-1 text-4xl font-light tracking-wider text-white uppercase link hover:text-pink-500"
                        active-class="is-active-link-mb"
                        exact-active-class="text-red-500 active"
                    >{{ element.name }}</g-link>
                </li>
            </ul>
        </nav>

        <button
            id="mobile-nav-toggle"
            class="fixed top-0 right-0 z-50 flex items-center justify-end w-auto h-16 pt-2 pr-6 font-bold border-none mobile-nav-toggle focus:outline-none md:hidden"
            :class="toggleNav ? 'menu-toggle-active': ''"
            aria-expanded="false"
            aria-controls="mobile-nav"
            @click="toggle"
        >
            <span class="mr-2 font-medium mobile-nav-label">Menu</span>

            <span class="mobile-nav-icon" aria-hidden="true">
                <span class="block w-6 mb-1 transition mobile-nav-icon-line"></span>
                <span class="block w-6 mb-1 transition mobile-nav-icon-line"></span>
                <span class="block w-6 transition mobile-nav-icon-line"></span>
            </span>
        </button>
    </div>
</template>

<static-query>
query {
  metadata {
    mobileMenu {
      name
      link
    }
  }
}
</static-query>

<script>
let myBody = {
  classList: {}
};
export default {
  data() {
    return {
      toggleNav: false
    };
  },
  methods: {
    toggle() {
      this.toggleNav = !this.toggleNav;
      document.body.classList.toggle("menu-open");
    },
    handleSCroll(event) {
      let header = document.querySelector(".mobile-nav-toggle");
      if (
        window.scrollY > 200 &&
        !header.className.includes("menu-toggle-change")
      ) {
        header.classList.add("menu-toggle-change");
      } else if (window.scrollY < 200) {
        header.classList.remove("menu-toggle-change");
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleSCroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleSCroll);
  }
};
</script>