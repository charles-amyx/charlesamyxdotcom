<template>
    <Layout>
        <section class="flex-1">
            <h1 class="mb-4 text-3xl page-title md:text-center md:text-5xl lg:text-6xl">Paint</h1>
            <p class="mb-16 text-base text-gray-400 lg:mb-24 md:text-center">Some fever dreams.</p>
            <div class="px-2">
                <div class="flex flex-wrap items-start -mx-3 overflow-hidden">
                    <div
                        class="w-full px-3 my-3 overflow-hidden md:w-1/3"
                        v-for="entry in $page.allPaint.edges"
                        :key="entry.node.id"
                        v-scroll-reveal="{ delay: 250, distance: '12px', opacity: 0, origin: 'bottom' }"
                    >
                        <article class="rounded-sm shadow-lg group">
                            <figure>
                                <g-image :alt="entry.node.image_caption" :src="entry.node.image" />
                            </figure>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>

<script>
export default {
    metaInfo: {
        title: "Paint",

        meta: [
            { name: "author", content: "Charles E. Amyx, III" },
            {
                name: "description",
                content: "Some sampling of artwork from CE Amyx, III"
            }
        ]
    }
};
</script>

<page-query>
  query {
    allPaint(sortBy: "title", order: ASC) {
      edges {
        node {
          title
          path
          id
          excerpt
          image(width:780)
          image_caption
        }
      }
    }
  }
</page-query>

<script>
export default {
    metaInfo: {
        title: "Paint",
        meta: [
            { name: "author", content: "Charles E. Amyx, III" },
            {
                name: "description",
                content:
                    "These represent how I currently feel about everything."
            }
        ]
    }
};
</script>
