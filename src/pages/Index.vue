<template>
  <Layout>
    <section class="flex-1">
      <h1 class="text-gray-300 page-title"><a
            class="pb-1 text-gray-400 transition border-b border-transparent hover:text-indigo-400 focus:text-indigo-400 hover:border-indigo-400"
            href="/design"
          >designer</a>, <a class="text-gray-500 cursor-not-allowed hover:text-red-400">painter</a>, <a class="text-gray-500 cursor-not-allowed hover:text-red-400">photographer</a></h1>
      <div class="content">
        <p class="text-lg tracking-wide">
          <a
            class="pb-1 text-gray-400 transition border-b border-transparent hover:text-indigo-400 focus:text-indigo-400 hover:border-indigo-400"
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
      },
      {
        key: 'og:url',
        name: 'og:url',
        content: 'https://charlesamyx.com',
      },
      {
        key: 'canonical',
        name: 'canonical',
        content: 'https://charlesamyx.com',
      },
    ]
  }
};
</script>
