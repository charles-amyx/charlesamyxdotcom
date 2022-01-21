<template>
    <Layout>
        <section class="flex-1 w-full px-6 ml-auto mr-auto">
            <div class="items-center -mx-6 md:flex">
                <div class="w-full px-6">
                    <g-image
                        class="pb-8 opacity-75"
                        src="~/assets/starp_trep.jpg"
                        alt="Star Trek the last thing on your mind"
                    />
                </div>
                <div class="w-full px-6 md:w-2/5">
                    <h1 class="mb-0 text-3xl font-normal leading-none md:text-4xl lg:text-6xl">Yeah...</h1>
                    <hr class="mb-12" />
                    <div>
                        <p>
                            <g-link
                                to="/about/"
                                class="pb-1 text-red-500 transition-all duration-200 ease-in-out border-b border-red-600 hover:border-blue-900"
                            >You should probably go back ««</g-link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>

<script>
export default {
    metaInfo: {
        title: "The pinal prontier",
    },
};
</script>
