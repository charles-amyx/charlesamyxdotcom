<template>
    <header
        id="header"
        class="z-10 flex flex-col px-6 pt-6 pb-4 mx-auto inner header md:flex-row md:justify-between md:px-6 md:pt-10 md:pb-6"
        role="banner"
    >
        <g-link
            class="block text-base font-semibold tracking-widest text-gray-500 uppercase md:text-base hover:text-white"
            to="/"
            aria-label="Back to home"
        >{{ $static.metadata.siteName }}</g-link>

        <nav id="nav" class="hidden nav md:flex">
            <ul class="flex flex-col items-center text-base menu md:flex-row list-reset">
                <li
                    class="mb-4 level-1 md:mr-6 md:mb-0"
                    v-for="element in $static.metadata.menu"
                    :key="element.name"
                >
                    <g-link
                        :to="element.link"
                        class="pb-1 font-semibold tracking-widest text-gray-500 uppercase transition border-transparent link hover:text-white"
                        active-class="is-active-link"
                        exact-active-class="active"
                    >{{ element.name }}</g-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<static-query>
query {
  metadata {
    siteName
    menu {
      name
      link
    }
  }
}
</static-query>