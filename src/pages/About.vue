<template>
  <Layout>
    <section class="flex-1">
      <h1 class="mb-16 text-3xl page-title md:text-center md:text-5xl lg:mb-24 lg:text-6xl">About</h1>
      <div class="content">
        <div class="w-full">
          <g-image
            class="pb-8 blend-overlay"
            src="~/assets/about.jpg"
            alt="an abstract painting"
          />
          <div class="w-full mx-auto leading-relaxed md:w-7/12">
            <p>I am currently the Senior Web Designer at Michigan Creative, a division of the Office of the Vice President for Communications at the University of Michigan. I have a keen interest about inclusive, accessible, and compassionate design.</p>
            <h2 class="text-2xl md:text-4xl">Experience</h2>

            <div class="mb-16">
              <div class="text-sm font-light tracking-widest">04/2018 - 03/2018</div>
              <div class="font-extrabold tracking-wide">University of Michigan | Michigan Creative</div>
              <div class="mb-6 font-medium">Senior Web Designer</div>
              <p
                class="text-base"
              >Primary designer for all web projects. Additionally, I build many of the sites I've designed. My role includes mentoring and guiding junior designers, advocating for accessibility, practicing kind and inclusive design, and communicating best practices for the web to all of our campus partners.</p>
            </div>

            <div class="mb-16">
              <div class="text-sm font-light tracking-widest">02/2015 - 04/2018</div>
              <div
                class="font-extrabold tracking-wide"
              >University of Michigan | College of Engineering</div>
              <div class="mb-6 font-medium">Digital Design Lead</div>
              <p
                class="text-base"
              >Participated in and executed the College of Engineering brand refresh, designed and built the front end for a new News Center, events site, and five department themes, designed and retrofitted engin.umich.edu to be responsive, design and built fully responsive emails for the college and six departments.</p>
            </div>

            <div class="mb-16">
              <div class="text-sm font-light tracking-widest">01/2006 - 02/2015</div>
              <div class="font-extrabold tracking-wide">Bonnier Corporation</div>
              <div class="mb-6 font-medium">Digital Art Director</div>
              <p
                class="text-base"
              >Responsible for Bonnier Motocycle Group digital properties, Photography group (popphoto.com and americanphotomag.com), redesigned and worked with front end developers for UX/UI tweaks and enhancements. Lead designer for the Outdoor Group’s long form editorial features.</p>
            </div>

            <h2 class="text-2xl md:text-4xl">Expertise</h2>
            <div class="mb-16">
              <p
                class="text-base"
              >Aside from traditional print and digital design, I am front end developer with experience using VueJS, React, and a number of static site generators such as Hugo and 11ty. I strive to write accessible and semantic HTML and CSS. While I have extensive experience with CSS preprocessors, lately I find myself using vanilla CSS and a utility-first CSS philosophy. My use of javascript is mainly presentation and when I write it, it's of the vanilla variety.</p>
              <p class="text-base">
                This site is built with a static site generator called 
                <a href="https://gridsome.org/">Gridsome (VueJS)</a> and
                <a href="https://tailwindcss.com/">TailwindCSS</a> for its styling.
              </p>
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
