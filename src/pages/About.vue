<template>
    <Layout>
        <section class="flex-1">
            <h1
                class="mb-16 text-3xl page-title md:text-center md:text-5xl lg:mb-24 lg:text-6xl"
            >
                About
            </h1>
            <div class="content">
                <div class="w-full">
                    <g-image
                        class="hidden pb-8 opacity-75 md:block"
                        src="~/assets/about.jpg"
                        alt="an abstract painting"
                    />
                    <div class="w-full mx-auto leading-relaxed md:w-7/12">
                        <p>
                            A Senior Web Designer at the University of Michigan School of Nursing. Keen
                            interest around inclusive, accessible, and
                            compassionate web design.
                            <br />
                            <br />Proud Filipino, escrimador, and fly fisherman.
                            Oh, and I played in a number of bands in Florida no
                            one's ever heard of.
                        </p>
                        <h2
                            class="text-2xl md:text-4xl"
                            v-scroll-reveal="{
                                delay: 250,
                                distance: '12px',
                                opacity: 0,
                                origin: 'bottom',
                            }"
                        >
                            Experience
                        </h2>
                        <div
                            class="mb-16"
                            v-scroll-reveal="{
                                delay: 250,
                                distance: '12px',
                                opacity: 0,
                                origin: 'bottom',
                            }"
                            v-for="entry in $page.allExperience.edges"
                            :key="entry.node.id"
                        >
                            <div class="text-sm font-light tracking-widest">
                                {{ entry.node.startDate }} -
                                {{ entry.node.endDate }}
                            </div>
                            <div class="text-xl font-bold tracking-wide">
                                {{ entry.node.company }}
                            </div>
                            <div class="mb-6">{{ entry.node.title }}</div>
                            <p class="text-base">
                                {{ entry.node.description }}
                            </p>
                        </div>

                        <h2
                            class="text-2xl md:text-4xl"
                            v-scroll-reveal="{
                                delay: 250,
                                distance: '12px',
                                opacity: 0,
                                origin: 'bottom',
                            }"
                        >
                            Expertise
                        </h2>
                        <div
                            class="mb-16"
                            v-scroll-reveal="{
                                delay: 250,
                                distance: '12px',
                                opacity: 0,
                                origin: 'bottom',
                            }"
                        >
                            <p class="text-base">
                                Along with traditional print and digital design,
                                I am a front end developer with experience using
                                VueJS, React, a number of static site generators
                                such as Hugo and 11ty, and Jamstack in general. I also work with a build out CMSes using a headless CMS called Netlify CMS. I also build custom Wordpress themes with custom React components for Gutenberg.
                                I strive to write accessible and semantic HTML
                                and CSS. While I have extensive experience with
                                SASS, I find myself lately using PostCSS and a
                                utility-first CSS philosophy. My use of
                                javascript is mainly presentational
                                and&mdash;when I do write it&mdash;it's of the
                                vanilla variety.
                            </p>
                            <p class="text-base">
                                This site is built with a static site generator
                                called
                                <a href="https://gridsome.org/"
                                    >Gridsome (VueJS)</a
                                >
                                and uses
                                <a href="https://tailwindcss.com/"
                                    >TailwindCSS</a
                                >
                                for its styling.
                            </p>
                            <p class="text-base">
                                It is also a redesign in progress, an approach
                                inspired by Frank Chimero. I very much like
                                tinkering.
                            </p>
                            <p class="text-base">
                                <strong>Known issues:</strong> mobile menu
                                flashing on initial load on desktop.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>

<page-query>
  query {
    allExperience(sortBy: "position", order: ASC) {
      edges {
        node {
          title
          company
          startDate
          endDate
          description
        }
      }
    }
  }
</page-query>

<script>
export default {
    metaInfo: {
        title: "About",
        meta: [
            { name: "author", content: "Charles E. Amyx, III" },
            {
                name: "description",
                content:
                    "All about Charles E. Amyx, III, a digital art director, designer, painter, and photographer in Ann Arbor, MI",
            },
        ],
    },
};
</script>
