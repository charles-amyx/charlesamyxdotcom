<template>
  <Layout>
    <section class="flex-1 w-full max-w-6xl px-6 ml-auto mr-auto">
      <div class="mb-8 font-serif font-normal text-black lg:mb-16 page-title">
        <h1 class="text-4xl leading-snug md:text-6xl lg:text-8xl">
          <g-link
            class="inline-block text-gray-800 transition  hover:text-indigo-700 alpha focus:text-indigo-700"
            to="/design/"
            >designer</g-link
          >,
          <g-link
            class="inline-block text-gray-800 transition  hover:text-indigo-700 alpha focus:text-indigo-700"
            to="/paint/"
            >painter</g-link
          >,
          <g-link
            class="inline-block text-gray-800 transition  hover:text-indigo-700 alpha focus:text-indigo-700"
            to="/photo/"
            >photographer</g-link
          >
        </h1>
      </div>
      <div class="content">
        <p class="text-lg tracking-wide">
          <a
            class="text-gray-800 transition  hover:text-red-700 focus:text-red-700"
            href="https://nursing.umich.edu"
            >Currently at the University of Michigan School of Nursing.</a
          >
        </p>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
    meta: [
      { name: "author", content: "Charles E. Amyx, III" },
      {
        name: "description",
        content:
          "The portfolio for Charles E. Amyx, III, a digital art director, designer, photographer, and painter in Ann Arbor, MI.",
      },
      {
        key: "og:url",
        name: "og:url",
        content: "https://charlesamyx.com",
      },
      {
        key: "canonical",
        name: "canonical",
        content: "https://charlesamyx.com",
      },
    ],
  },
};
</script>
