<template>
  <Layout>
    <section class="flex-1">
      <div class="font-serif text-gray-300 page-title">
        <a
          class="inline-block text-gray-400 transition hover:text-indigo-400 alpha focus:text-indigo-400"
          href="/design"
        >designer</a>,
        <a
          class="inline-block text-gray-400 transition alpha hover:text-indigo-400 focus:text-indigo-400"
          href="/paint"
        >painter</a>,
        <a
          class="inline-block text-gray-500 cursor-not-allowed alpha hover:text-red-400"
        >photographer</a>
      </div>
      <div class="content">
        <p class="text-lg tracking-wide">
          <a
            class="pb-1 text-gray-400 transition border-b border-transparent hover:text-indigo-400 focus:text-indigo-400 hover:border-indigo-400"
            href="https://creative.umich.edu"
          >Currently at the University of Michigan.</a>
        </p>
      </div>
    </section>
  </Layout>
</template>

<script>
// import gsap from "gsap";
// import { TimelineMax } from "gsap";
export default {
  metaInfo: {
    title: "Home",
    meta: [
      { name: "author", content: "Charles E. Amyx, III" },
      {
        name: "description",
        content:
          "The portfolio for Charles E. Amyx, III, a digital art director in Ann Arbor, MI"
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
  },
  // mounted() {
  //   var abba = document.querySelectorAll(".alpha");
  //   var tl = new TimelineMax({}),
  //     start = .2, // allow to offset the start time
  //     duration = 0.2
  //   if (abba) {
  //     tl.fromTo(abba, { y: -60, opacity: 0 }, {duration,  ease: "sine.out", y: 0, opacity: 1 });
  //   }
  // }
};
</script>
