<template>
  <Layout>
    <section class="flex-1">
      <h1 class="mb-4 text-3xl page-title md:text-center md:text-5xl lg:text-6xl">Photography</h1>
      <p class="mb-16 text-base text-gray-400 lg:mb-24 md:text-center">Light bends</p>
      <div v-masonry transition-duration="0.3s" item-selector=".item" :fit-width="true">
        <div v-masonry-tile class="item" v-for="(item,i) in items" :key="i">
          <div class="m-3 overflow-hidden bg-white rounded shadow-lg max-w-22">
            <img class="w-full" :src="item.src" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
	query Photos{
		posts: allPhoto{
			edges {
				node {
					display_url
				}
			}
		}
}
</page-query>

<script>
// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//   return images;
// }

// const images = importAll(require.context('./images/', true, /\.(jpg)$/));

export default {
  metaInfo: {
    title: "Photo",
    meta: [
      { name: "author", content: "Charles E. Amyx, III" },
      {
        name: "description",
        content: "Some sampling of photography work from CE Amyx, III"
      }
    ]
  },
  data: function() {
    return {
      items: [
        {
          src: require("../assets/img/1.jpg")
        },
        {
          src: require("../assets/img/2.jpg")
        },
        {
          src: require("../assets/img/3.jpg")
        },
        {
          src: require("../assets/img/4.jpg")
        },
        {
          src: require("../assets/img/5.jpg")
        },
        {
          src: require("../assets/img/6.jpg")
        },
        {
          src: require("../assets/img/7.jpg")
        },
        {
          src: require("../assets/img/8.jpg")
        },
        {
          src: require("../assets/img/9.jpg")
        },
        {
          src: require("../assets/img/10.jpg")
        },
        {
          src: require("../assets/img/11.jpg")
        },
        {
          src: require("../assets/img/12.jpg")
        },
        {
          src: require("../assets/img/13.jpg")
        },
        {
          src: require("../assets/img/14.jpg")
        },
        {
          src: require("../assets/img/15.jpg")
        },
        {
          src: require("../assets/img/16.jpg")
        },
        {
          src: require("../assets/img/17.jpg")
        },
        {
          src: require("../assets/img/18.jpg")
        },
        {
          src: require("../assets/img/19.jpg")
        },
        {
          src: require("../assets/img/20.jpg")
        }
      ]
    };
  }
};
</script>
