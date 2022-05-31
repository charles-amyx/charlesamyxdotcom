<template>
  <Layout>
    <section class="flex-1 w-full max-w-6xl px-6 ml-auto mr-auto">
      <div class="mb-8 font-normal text-black font-mega lg:mb-16 page-title">
        <h1 class="text-4xl leading-snug md:text-7xl">
          <g-link
            class="text-gray-800 transition hover:text-indigo-700 alpha focus:text-indigo-700"
            to="/design/"
            >Designer </g-link
          ></h1>
          <p class="mb-6 text-4xl leading-snug md:text-7xl"><g-link
            class="text-gray-800 transition hover:text-indigo-700 alpha focus:text-indigo-700"
            to="/paint/"
            >Painter </g-link
          ></p>
          
          <p class="text-4xl leading-snug md:text-7xl">
            <g-link
              class="block tracking-tight text-gray-800 transition md:tracking-normal hover:text-indigo-700 alpha focus:text-indigo-700"
              to="/photo/"
              >Photographer </g-link
            >
          </p>
        </h1>
      </div>
      <div class="content">
        <p class="text-lg tracking-wide">
          <a
            class="text-gray-800 transition hover:text-red-700 focus:text-red-700"
            href="https://nursing.umich.edu"
            >Currently at AllCampus.</a
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
