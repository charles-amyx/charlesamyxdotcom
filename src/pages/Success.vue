<template>
  <Layout>
    <section class="flex-1 w-full max-w-6xl px-6 ml-auto mr-auto">
      <h1 class="page-title">Right on! It's on its way.</h1>
      <div class="content">
        <div class="w-full">
          <g-image src="~/assets/con.jpg" alt="an english setter running through the snow" />
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Success",
    meta: [
      { name: "author", content: "Charles E. Amyx, III" },
      {
        name: "description",
        content: "Successfully submitted a request to reach out."
      }
    ]
  }
};
</script>
