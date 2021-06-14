<template>
    <header
        id="header"
        class="z-10 flex flex-col px-6 pt-6 pb-4 mx-auto inner header md:flex-row md:justify-between md:px-6 md:pt-16 md:pb-6"
        role="banner"
    >
        <g-link
            class="block text-base font-semibold tracking-widest text-gray-800 uppercase md:text-base hover:text-gray-600 focus:text-gray-600"
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
                        class="pb-1 font-semibold tracking-widest text-gray-700 uppercase transition border-b-0 link hover:text-indigo-600 focus:text-indigo-600 hover:border-b hover:border-indigo-800"
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