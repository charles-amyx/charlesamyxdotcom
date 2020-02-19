<template>
  <Layout>
    <section class="flex-1">
      <h1 class="tracking-tight text-gray-300 page-title"><a
            class="pb-1 text-gray-400 transition border-b border-transparent hover:text-red-500 focus:text-red-500 hover:border-red-500"
            href="/design"
          >designer</a>, <a class="text-gray-600 cursor-not-allowed hover:text-gray-700">painter</a>, <a class="text-gray-600 cursor-not-allowed hover:text-gray-700">photographer</a></h1>
      <div class="content">
        <p class="text-lg tracking-wide">
          <a
            class="pb-1 text-gray-400 transition border-b border-transparent hover:text-red-500 focus:text-red-500 hover:border-red-500"
            href="https://creative.umich.edu"
          >Currently at the University of Michigan.</a>
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
          "The portfolio for Charles E. Amyx, III, a digital art director in Ann Arbor, MI"
      }
    ]
  }
};
</script>
