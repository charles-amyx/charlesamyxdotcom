<template>
  <Layout>
    <section class="flex-1 w-full max-w-6xl px-6 ml-auto mr-auto">
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
              A Senior Web Designer at the University of Michigan School of
              Nursing. Keen interest around inclusive, accessible, and
              compassionate web design.
              <br />
              <br />Proud Filipino American, eskrimador, and fly fisherman. I
              also play music, take
              <g-link
                class="
                  pb-0.5
                  text-red-500
                  transition-all
                  duration-200
                  ease-in-out
                  border-b border-red-300
                  hover:border-blue-900
                "
                to="/photo/"
                >photos</g-link
              >
              (digital and lots and lots film cameras),
              <g-link
                class="
                  pb-0.5
                  text-red-500
                  transition-all
                  duration-200
                  ease-in-out
                  border-b border-red-300
                  hover:border-blue-900
                "
                to="/starp-trep/"
                >draw</g-link
              >
              stuff,
              <g-link
                class="
                  pb-0.5
                  text-red-500
                  transition-all
                  duration-200
                  ease-in-out
                  border-b border-red-600
                  hover:border-blue-900
                "
                to="/paint/"
                >paint</g-link
              >
              stuff, and read a lot.
            </p>
            <p>I'm currently working on a comprehensive design system and a visual refresh for the School of Nursing. :excited face:</p>
            <h2
              class="text-2xl md:text-4xl load-hidden"
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
              class="mb-16 load-hidden"
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
              class="text-2xl md:text-4xl load-hidden"
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
              class="mb-16 load-hidden"
              v-scroll-reveal="{
                delay: 250,
                distance: '12px',
                opacity: 0,
                origin: 'bottom',
              }"
            >
              <p class="text-base">
                Along with traditional print and digital design, I am a front
                end developer with experience using VueJS, React, a number of
                static site generators such as Hugo and 11ty, and with Jamstack
                in general. I also build out custom CMSes using a headless CMS
                called Netlify CMS and make custom Wordpress themes with custom
                React components for Gutenberg. I'm currently building a custom
                Drupal theme that's more fun that I originally thought! I strive
                to write accessible and semantic HTML and CSS. While I have
                extensive experience with SASS, I find myself lately using
                vanilla css with PostCSS and a utility-first CSS philosophy. My
                use of javascript is mainly presentational but have been doing
                more with Firebase lately which requires some heavy
                javascripting to create and interact with objects.
              </p>
              <p class="text-base">
                This site is built with a static site generator called
                <a
                  class="
                    pb-0.5
                    text-red-500
                    transition-all
                    duration-200
                    ease-in-out
                    border-b border-red-300
                    hover:border-blue-900
                  "
                  href="https://gridsome.org/"
                  >Gridsome (VueJS)</a
                >
                and uses
                <a
                  class="
                    pb-0.5
                    text-red-500
                    transition-all
                    duration-200
                    ease-in-out
                    border-b border-red-300
                    hover:border-blue-900
                  "
                  href="https://tailwindcss.com/"
                  >TailwindCSS</a
                >
                for its styling. It's set in
                <a
                  class="
                    pb-0.5
                    text-red-500
                    transition-all
                    duration-200
                    ease-in-out
                    border-b border-red-300
                    hover:border-blue-900
                  "
                  href="https://fonts.google.com/?query=lexend"
                  >Lexend</a
                >
                .
              </p>
              <p class="text-base">
                It is also a redesign in progress, an approach inspired by Frank
                Chimero. And I very much like tinkering.
              </p>

              <h3 class="font-sans text-base">
                <strong>Known issues:</strong>
              </h3>
              <ul class="pl-6 text-base list-disc">
                <li class="pb-4">
                  <strike
                    >The photo page is powered by a masonry plugin for Vue. It's
                    not consistently great. Planning on simplifying with a CSS
                    grid layout instead.</strike
                  >
                </li>
                <li>
                  <strike>
                    The mobile menu is flashing on initial load on desktop.
                  </strike>
                </li>
              </ul>
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
