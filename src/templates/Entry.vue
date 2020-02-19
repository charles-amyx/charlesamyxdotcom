
<template>
  <Layout>
    <section id="container-centre" class="flex-1 column centre">
      <div class="mb-12 post-header md:mb-20">
        <h1
          class="text-3xl page-title md:text-center md:text-5xl lg:text-6xl"
          v-html="$page.design.title"
        ></h1>
        <figure class="mt-10">
          <g-image :alt="$page.design.image_caption" :src="$page.design.image" />
          <figcaption
            class="mt-4 text-sm italic text-center text-gray-600"
          >{{ $page.design.image_caption }}</figcaption>
        </figure>
      </div>

      <div class="content post md:px-16">
        <p v-html="$page.design.excerpt"></p>

        <div v-html="$page.design.content"></div>
        <div>
          <g-link
            class="block text-gray-400 transition hover:text-red-500"
            to="/design"
          >Back to Design</g-link>
        </div>
      </div>
    </section>
  </Layout>
</template>


<page-query>
  query($id: ID!) {
    design(id: $id) {
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
      title: this.$page.design.title,
      meta: [
        { name: "author", content: "Charles E. Amyx, III" },
        {
          name: "description",
          content: this.$page.design.excerpt
        }
      ]
    };
  }
};
</script>
