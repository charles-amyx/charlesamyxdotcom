<template>
  <Layout>
    <section class="flex-1 w-full md:w-2/4">
      <h1 class="tracking-tight page-title">Hello there</h1>
      <div class="w-full text-gray-800 content">
        <form
          class="form"
          name="contact"
          method="POST"
          action="/success/"
          v-on:submit.prevent="handleSubmit"
          data-netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:
              <input name="bot-field" />
            </label>
          </p>
          <div class="row required">
            <label for="name">Name</label>
            <input
              class="transition input"
              id="name"
              type="text"
              name="name"
              autocomplete="name"
              required
              aria-required="true"
              v-model="formData.name"
            />
          </div>
          <div class="row required">
            <label for="email">Email</label>
            <input
              class="transition input"
              id="email"
              type="text"
              name="email"
              autocorrect="off"
              autocapitalize="off"
              autocomplete="email"
              required
              aria-required="true"
              v-model="formData.email"
            />
          </div>
          <div class="row required">
            <label for="message">Message</label>
            <textarea class="transition textarea" id="message" name="message" required v-model="formData.message"></textarea>
          </div>&nbsp;
          <div class>
            <button
              class="inline-block px-4 py-2 font-bold text-white transition bg-gray-800 rounded hover:text-gray-100 hover:bg-blue-800"
              type="submit"
            >Send message!</button>
          </div>
        </form>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact",
    meta: [
      { name: "author", content: "Charles E. Amyx, III" },
      {
        name: "description",
        content: "Contact Charles E. Amyx, III, digital art director in Ann Arbor, MI"
      }
    ]
  },
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => this.$router.push("/success"))
        .catch(error => alert(error));
    }
  }
};
</script>
