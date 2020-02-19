<template>
  <Layout>
    <section class="flex-1">
      <h1 class="mb-16 text-3xl page-title md:text-center md:text-5xl lg:mb-24 lg:text-6xl">Designer</h1>
      <div class="px-2">
        <div class="flex flex-wrap items-stretch -mx-2 posts">
          <div
            class="w-full px-2 mb-8 md:w-1/3"
            v-for="entry in $page.allDesign.edges"
            :key="entry.node.id"
          >
            <article class="flex-1 h-full overflow-hidden bg-white rounded-sm shadow-lg article-card">
              <g-link
                class="relative block overflow-hidden featured-image-link"
                :to="entry.node.path"
              >
                <figure>
                  <g-image
                    class="block loaded"
                    :alt="entry.node.image_caption"
                    :src="entry.node.image"
                  />
                </figure>
              </g-link>
              <div class="p-8">
                <h2 class="mb-6 text-2xl">
                  <g-link
                    class="block text-purple-900 hover:text-red-500"
                    :to="entry.node.path"
                  >{{ entry.node.title }}</g-link>
                </h2>
                <div class="mb-4 text-sm text-gray-600 md:flex">
                  <p class="hidden md:block">{{ entry.node.excerpt }}</p>
                </div>
              </div>
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
    title: "Design"
  }
};
</script>

<page-query>
  query {
    
    allDesign(sortBy: "title", order: ASC) {
      
      edges {
        node {
          title
          path
          excerpt
          image(width:780)
        }
      }
    }
  }
</page-query>

