<template>
    <Layout>
        <section class="flex-1">
            <h1 class="mb-4 text-3xl page-title md:text-center md:text-5xl lg:text-6xl">Design</h1>
            <p class="mb-16 text-base text-gray-800 lg:mb-24 md:text-center">Some recent projects.</p>
            <div class="px-2 pb-8">
                <div class="flex flex-wrap items-stretch -mx-3 posts">
                    <div
                        class="w-full px-3 mb-6 md:w-1/3 load-hidden"
                        v-for="entry in $page.allDesign.edges"
                        :key="entry.node.id"
                        v-scroll-reveal="{ delay: 250, distance: '12px', opacity: 0, origin: 'bottom' }"
                    >
                        <article
                            class="flex-1 h-full overflow-hidden transition bg-white rounded-sm shadow-lg group hover:shadow-2xl article-card"
                        >
                            <g-link
                                class="relative block overflow-hidden featured-image-link"
                                :to="entry.node.path"
                            >
                                <figure>
                                    <g-image
                                        :alt="entry.node.image_caption"
                                        :src="entry.node.image"
                                    />
                                </figure>
                            </g-link>
                            <div class="p-8">
                                <h2 class="mb-6 text-2xl">
                                    <g-link
                                        class="block text-purple-900 hover:text-indigo-400"
                                        :to="entry.node.path"
                                    >{{ entry.node.title }}</g-link>
                                </h2>
                                <div class="mb-4 text-sm text-gray-700 md:flex">
                                    <p class="hidden md:block">{{ entry.node.excerpt }}</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <h2 class="mb-4 text-4xl">Other projects</h2>
            <p class="mb-8 text-base text-gray-800">Some other projects of note.</p>
            <ul class="px-8 list-disc">
              <li><a href="https://vets.umich.edu/">U-M Veteran and Military Services.</a> (2020; Drupal site; design only)</li>
              <li><a href="https://nursing.umich.edu/online-msn/">Online Master of Nursing.</a> (2019; Hugo static site; development only)</li>
              <li><a href="https://youthpolicylab.umich.edu/">Youth Policy Lab.</a> (2019-2021; Hugo static site, Netlify CMS; development only and site maintenance)</li>
              <li><a href="https://arc.engin.umich.edu/">Automotive Research Center.</a> (2019; Hugo static site; design only)</li>
              <li><a href="https://nesbit100.com/">Department of Urology Centennial.</a> (2019; Wordpress site; design only)</li>
              <li><a href="https://compliance.umich.edu">U-M Compliance.</a> (2018; Wordpress site; design and development)</li>
              <li><a href="https://sexualmisconduct.umich.edu/">U-M Sexual and Gender-based Misconduct Reporting and Resources.</a> (2018; Wordpress site; design and development)</li>
              <li><a href="https://michigan-open.org/">Michigan OPEN.</a> (2018; Wordpress site; design only)</li>
              <li><a href="https://um-ellas.org/">ELLAS.</a> (2018; Wordpress site; design only)</li>
              <li><a href="https://msqc.org/">Michigan Surgical Quality Collaborative (MSQC).</a> (2018; Wordpress site; development only)</li>
              <li><a href="https://report.teachingworks.org/">TeachingWorks 2017-2018 Annual Report.</a> (2018; Static site; animations, design, and development)</li>             
            </ul>
        </section>
    </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Design",

    meta: [
      { name: "author", content: "Charles E. Amyx, III" },
      {
        name: "description",
        content: "Some sampling of design work mostly from U-M"
      }
    ]
  }
};
</script>

<page-query>
  query {
    allDesign(sortBy: "created", order: DESC) {
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

