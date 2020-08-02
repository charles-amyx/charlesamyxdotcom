
<template>
  <Layout>
    <section class="flex-1 column">
      <div class="mb-12 post-header md:mb-10">
        <h1
          class="text-3xl page-title md:text-center md:text-5xl lg:text-6xl"
          v-html="$page.blog.title"
        ></h1>
        <figure v-if="$page.blog.image" class="mt-10">
          <g-image :alt="$page.blog.image_caption" :src="$page.blog.image" />
          <figcaption
            class="mt-4 text-sm italic text-center text-gray-600 sr-only"
          >{{ $page.blog.image_caption }}</figcaption>
        </figure>
      </div>

      <div class="content post md:px-16">
        <p v-html="$page.blog.excerpt"></p>

        <div v-html="$page.blog.content"></div>
      </div>
    </section>
  </Layout>
</template>


<page-query>
  query($id: ID!) {
    blog(id: $id) {
      title
      path
      image(width:1200)
      image_caption
      excerpt
      content
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.blog.title,
      meta: [
        { name: "author", content: "Charles E. Amyx, III" },
        {
          name: "description",
          content: this.$page.blog.excerpt
        }
      ]
    };
  }
};
</script>
