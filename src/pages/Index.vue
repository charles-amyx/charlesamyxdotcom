<template>
    <Layout>
        <section class="flex-1">
            <div class="font-serif font-semibold leading-tight text-black page-title">
                <h1>
                    <g-link
                        class="inline-block text-gray-800 transition hover:text-indigo-700 alpha focus:text-indigo-700"
                        to="/design/"
                    >designer</g-link>,
                    <g-link
                        class="inline-block text-gray-800 transition hover:text-indigo-700 alpha focus:text-indigo-700"
                        to="/paint/"
                    >painter</g-link>,
                    <g-link
                        class="inline-block text-gray-800 transition hover:text-indigo-700 alpha focus:text-indigo-700"
                        to="/photo/"
                    >photographer</g-link>
                </h1>
            </div>
            <div class="content">
                <p class="text-lg tracking-wide">
                    <a
                        class="pb-1 text-gray-800 transition border-b border-transparent hover:text-gray-700 focus:text-gray-700 hover:border-gray-700"
                        href="https://nursing.umich.edu"
                    >Currently at the University of Michigan School of Nursing.</a>
                </p>
            </div>
        </section>
    </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
    script: [
      { innerHTML: '{ "@context": "http://schema.org/", "@type": "Person", "name": "Charles E. Amyx, III", "jobTitle": "Art Director", "url": "https://charlesamyx.com" }', type: 'application/ld+json' }
    ],
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
