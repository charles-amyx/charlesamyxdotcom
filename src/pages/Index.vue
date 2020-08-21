<template>
    <Layout>
        <section class="flex-1">
            <div class="font-serif leading-tight text-gray-300 page-title">
                <h1>
                    <g-link
                        class="inline-block text-gray-400 transition hover:text-indigo-400 alpha focus:text-indigo-400"
                        to="/design/"
                    >designer</g-link>,
                    <g-link
                        class="inline-block text-gray-400 transition alpha hover:text-indigo-400 focus:text-indigo-400"
                        to="/paint/"
                    >painter</g-link>,
                    <g-link
                        class="inline-block text-gray-400 transition alpha hover:text-indigo-400 focus:text-indigo-400"
                        to="/photo/"
                    >photographer</g-link>
                </h1>
            </div>
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
          "The portfolio for Charles E. Amyx, III, a digital art director, designer, photographer, and painter in Ann Arbor, MI."
      },
      {
        key: "og:url",
        name: "og:url",
        content: "https://charlesamyx.com"
      },
      {
        key: "canonical",
        name: "canonical",
        content: "https://charlesamyx.com"
      }
    ]
  }
};
</script>
