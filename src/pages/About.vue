<template>
  <Layout>
    <section class="flex-1">
      <h1 class="page-title">About</h1>
      <div class="content">
        <div class="w-full">
          <g-image src="~/assets/archer.jpg" alt="an english setter with his head cocked to one side" />
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About",
    meta: [
      { name: "author", content: "Charles E. Amyx, III" },
      {
        name: "description",
        meta: [
          { name: "author", content: "Charles E. Amyx, III" },
          {
            name: "description",
            content: "C.E. Amyx, III a digital art director in Ann Arbor, MI"
          }
        ]
      }
    ]
  }
};
</script>
