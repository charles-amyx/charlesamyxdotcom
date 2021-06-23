
<template>
    <Layout>
        <section class="flex-1 column">
            <div class="mb-12 post-header md:mb-20">
                <h1
                    class="mb-8 text-3xl leading-none page-title md:text-center md:text-4xl lg:text-5xl"
                    v-html="$page.design.title"
                ></h1>
                <figure class="mt-10">
                    <g-image :alt="$page.design.image_caption" :src="$page.design.image" />
                    <figcaption
                        class="mt-4 text-base italic text-center text-gray-700"
                    >{{ $page.design.image_caption }}</figcaption>
                </figure>
            </div>

            <div class="content post md:px-16">
                <p v-html="$page.design.excerpt"></p>

                <div v-html="$page.design.content"></div>
                <div>
                    <g-link
                        class="block text-gray-700 transition hover:text-indigo-400"
                        to="/design/"
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
                    content: this.$page.design.excerpt,
                },
            ],
        };
    },
};
</script>
