<template>
  <Layout>
    <section class="flex-1">
      <h1 class="mb-4 text-3xl page-title md:text-center md:text-5xl lg:text-6xl">Photography</h1>
      <p class="mb-16 text-base text-gray-400 lg:mb-24 md:text-center">My dog's instagram for now.</p>
      <div v-if="$page.posts.edges" class="px-2">
        <div class="flex flex-wrap items-stretch -mx-4 posts">
          <div class="h-full px-4 mb-8 overflow-hidden w-100 md:w-1/3 max-h-340" v-for="edge in $page.posts.edges" :key="edge.node.id">
            <g-image
              v-if="edge.node.display_url"
              :src="edge.node.display_url"
              width="265"
              height="300"
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
	query Photos{
		posts: allPhoto{
			edges {
				node {
					display_url
				}
			}
		}
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Photo",

    meta: [
      { name: "author", content: "Charles E. Amyx, III" },
      {
        name: "description",
        content: "Some sampling of photography work from CE Amyx, III"
      }
    ]
  }
};
</script>
