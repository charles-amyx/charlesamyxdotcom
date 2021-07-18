<template>
    <Layout>
        <section class="flex-1 w-full max-w-6xl px-6 ml-auto mr-auto">
            <h1 class="mb-4 text-3xl page-title md:text-center md:text-5xl lg:text-6xl">Photography</h1>
            <p class="mb-16 text-base text-gray-700 lg:mb-24 md:text-center">Light bends.</p>
            <masonry :cols="{default: 4, 768: 3, 640: 1}" :gutter="15">
                <div class="item" v-for="(item,index) in items" :key="index">
                    <div
                        class="mb-3 overflow-hidden bg-white rounded-sm load-hidden"
                        v-scroll-reveal="{ delay: 250, distance: '12px', opacity: 0, origin: 'bottom' }"
                    >
                        <figure>
                            <g-image :src="item.src" :alt="item.caption" />
                        </figure>
                    </div>
                </div>
            </masonry>
        </section>
    </Layout>
</template>

<script>
import Vue from "vue";
import VueMasonry from 'vue-masonry-css';

Vue.use(VueMasonry);

export default {
    metaInfo: {
        title: "Photo",
        meta: [
            { name: "author", content: "Charles E. Amyx, III" },
            {
                name: "description",
                content: "Some of Charles' photography work"
            }
        ]
    },
    data: function() {
        return {
            items: [
                {
                    src: require("~/assets/img/1.jpg"),
                    caption: "Vilnius LT"
                },
                {
                    src: require("~/assets/img/2.jpg"),
                    caption: "Vilnius LT and BMW"
                },
                {
                    src: require("~/assets/img/3.jpg"),
                    caption: "Vilnius LT and tourists"
                },
                {
                    src: require("~/assets/img/4.jpg"),
                    caption: "Vilnius LT and a couple of tourist"
                },
                {
                    src: require("~/assets/img/5.jpg"),
                    caption: "Varena LT in a field"
                },
                {
                    src: require("~/assets/img/6.jpg"),
                    caption: "Varena LT on a lake in a secret location"
                },
                {
                    src: require("~/assets/img/7.jpg"),
                    caption:
                        "Varena LT in a boat on a lake in a secret location"
                },
                {
                    src: require("~/assets/img/8.jpg"),
                    caption: "Vilnius LT in Uzupis"
                },
                {
                    src: require("~/assets/img/9.jpg"),
                    caption: "Vilnius LT in Uzupis"
                },
                {
                    src: require("~/assets/img/10.jpg"),
                    caption: "english setter"
                },
                {
                    src: require("~/assets/img/11.jpg"),
                    caption: "gordon setter"
                },
                {
                    src: require("~/assets/img/12.jpg"),
                    caption: "a trail in the woods"
                },
                {
                    src: require("~/assets/img/13.jpg"),
                    caption: "two elk"
                },
                {
                    src: require("~/assets/img/14.jpg"),
                    caption: "english setter"
                },
                {
                    src: require("~/assets/img/15.jpg"),
                    caption: "a child smiling"
                },
                {
                    src: require("~/assets/img/16.jpg"),
                    caption: "children on a merry go round"
                },
                {
                    src: require("~/assets/img/17.jpg"),
                    caption: "a grown adult on the monkey bars"
                },
                {
                    src: require("~/assets/img/18.jpg"),
                    caption: "a hunter in a field"
                },
                {
                    src: require("~/assets/img/19.jpg"),
                    caption: "flandreau, sd"
                },
                {
                    src: require("~/assets/img/20.jpg"),
                    caption: "a child in the snow"
                }
            ]
        };
    }
};
</script>
