<template>
  <div class="footer-wrapper">
    <footer id="footer" class="bg-gray-200 footer" role="contentinfo">
      <div class="container items-center justify-between px-6 py-10 m-auto footer-inner md:flex">
        <p class="pb-8 text-purple-900 md:pb-0">
          © 2020 Charles E. Amyx, III
        </p>

      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    socialIcon(element) {
      return `/icons.svg#icon-${element.icon}`
    }
  }
}
</script>

<static-query>
query {
  metadata {
    social {
      icon
      link
    }
  }
}
</static-query>