<template>
  <header
    id="header"
    class="flex flex-col items-center p-4 mx-auto inner header md:flex-row md:justify-between md:p-6"
    role="banner"
  >
    <g-link
      class="block text-2xl text-white company-logo-link md:text-3xl hover:text-pink-500"
      to="/"
      aria-label="Back to home"
    >{{ $static.metadata.siteName }}</g-link>

    <nav id="nav" class="hidden nav md:flex">
      <ul class="flex flex-col items-center text-base menu md:flex-row list-reset">
        <li
          class="mb-4 level-1 md:mr-4 md:mb-0"
          v-for="element in $static.metadata.menu"
          :key="element.name"
        >
          <g-link
            :to="element.link"
            class="font-bold text-white link hover:text-pink-500"
            active-class="is-active-link"
            exact-active-class="text-pink-500 active"
          >{{ element.name }}</g-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    socialIcon(element) {
      return `/icons.svg#icon-${element.icon}`;
    }
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
    menu {
      name
      link
    }
  }
}
</static-query>