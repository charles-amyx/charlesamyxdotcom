<template>
  <Layout>
    <section class="flex-1">
      <h1 class="mb-16 text-3xl page-title md:text-center md:text-5xl lg:mb-24 lg:text-6xl">About</h1>
      <div class="content">
        <div class="w-full">
          <g-image
            class="hidden pb-8 blend-overlay md:block"
            src="~/assets/about.jpg"
            alt="an abstract painting"
          />
          <div class="w-full mx-auto leading-relaxed md:w-7/12">
            <p>I am currently the Senior Web Designer at Michigan Creative, a division of the Office of the Vice President for Communications at the University of Michigan. I have a keen interest around inclusive, accessible, and compassionate web design.</p>
            <h2 class="text-2xl md:text-4xl" v-scroll-reveal="{ delay: 250, distance: '12px', opacity: 0, origin: 'bottom' }">Experience</h2>

            <div class="mb-16" v-scroll-reveal="{ delay: 250, distance: '12px', opacity: 0, origin: 'bottom' }"
>
              <div class="text-sm font-light tracking-widest">04/2018 - 03/2018</div>
              <div class="text-xl font-bold tracking-wide">University of Michigan | Michigan Creative</div>
              <div class="mb-6">Senior Web Designer</div>
              <p
                class="text-base"
              >Primary designer for all web projects. Additionally, I build many of the sites I've designed. My role includes mentoring and guiding junior designers, advocating for accessibility, practicing kind and inclusive design, and communicating best practices for the web to all of our campus partners.</p>
            </div>

            <div class="mb-16" v-scroll-reveal="{ delay: 250, distance: '12px', opacity: 0, origin: 'bottom' }">
              <div class="text-sm font-light tracking-widest">02/2015 - 04/2018</div>
              <div class="text-xl font-bold tracking-wide">University of Michigan | College of Engineering</div>
              <div class="mb-6">Digital Design Lead</div>
              <p
                class="text-base"
              >Participated in and executed the College of Engineering brand refresh, designed and built the front end for a new News Center, events site, and five department themes, designed and retrofitted engin.umich.edu to be responsive, design and built fully responsive emails for the college and six departments.</p>
            </div>

            <div class="mb-16" v-scroll-reveal="{ delay: 250, distance: '12px', opacity: 0, origin: 'bottom' }">
              <div class="text-sm font-light tracking-widest">01/2006 - 02/2015</div>
              <div class="text-xl font-bold tracking-wide">Bonnier Corporation</div>
              <div class="mb-6">Digital Art Director</div>
              <p
                class="text-base"
              >Responsible for Bonnier Motocycle Group digital properties, Photography group, redesigned and worked with front end developers for UX/UI tweaks and enhancements. Lead designer for the Outdoor Group’s long form editorial features.</p>
            </div>

            <h2 class="text-2xl md:text-4xl" v-scroll-reveal="{ delay: 250, distance: '12px', opacity: 0, origin: 'bottom' }">Expertise</h2>
            <div class="mb-16" v-scroll-reveal="{ delay: 250, distance: '12px', opacity: 0, origin: 'bottom' }">
              <p
                class="text-base"
              >Along with traditional print and digital design, I am a front end developer with experience using VueJS, React, a number of static site generators such as Hugo and 11ty, and Jamstack in general.  I strive to write accessible and semantic HTML and CSS. While I have extensive experience with SASS, I find myself lately using PostCSS and a utility-first CSS philosophy. My use of javascript is mainly presentational and&mdash;when I do write it&mdash;it's of the vanilla variety.</p>
              <p class="text-base">
                This site is built with a static site generator called 
                <a href="https://gridsome.org/">Gridsome (VueJS)</a> and uses
                <a href="https://tailwindcss.com/">TailwindCSS</a> for its styling.
              </p>
              <p class="text-base">It is also a redesign in progress, an approach inspired by Frank Chimero. I like tinkering.</p>
            </div>
          </div>
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
        content: "All about Charles E. Amyx, III, a digital art director in Ann Arbor, MI"
      }
    ]
  }
};
</script>
