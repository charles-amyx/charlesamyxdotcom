<template>
  <Layout>
    <section class="flex-1">
      <h1 class="page-title">About</h1>
      <div class="content">
        <div class="w-full">
          <g-image
          class="pb-8"
            src="~/assets/archer.jpg"
            alt="an english setter with his head cocked to one side"
          />
          <p>It can't be<br>&mdash;in flux<br> &nbsp;&nbsp;&nbsp;happening then <span class="block -ml-5">and there</span><span class="block ml-40">or</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;can it</p>
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
            content:
              "All about Charles E. Amyx, III, a digital art director in Ann Arbor, MI"
          }
        ]
      }
    ]
  }
};
</script>
