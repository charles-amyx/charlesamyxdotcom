<template>
    <Layout>
        <section class="flex-1 w-full px-6 py-10 mx-auto max-w-75 lg:py-24">
            <div class="flex items-center -mx-6">
                <div class="w-full px-6 md:w-1/3">
                    <g-image
                        class="hidden pb-8 opacity-75 md:block"
                        src="~/assets/not-found.png"
                        alt="a dog with its head cocked to one side"
                    />
                </div>
                <div class="w-full px-6 md:w-2/3">
                    <h1 class="mb-0 text-6xl font-normal leading-none">404</h1>
                    <h2 class="font-sans text-xl font-medium tracking-wide uppercase">Page not found</h2>
                    <hr class="mb-12" />
                    <div>
                        <p class="mb-6">We could not locate the page you requested.</p>
                        <p>
                            <a
                                href="/"
                                class="text-black no-underline"
                            >Please go to the home page and try once more.</a>
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
        title: "404 not found",
    },
};
</script>
