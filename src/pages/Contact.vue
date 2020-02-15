<template>
  <Layout>
    <section id="container-centre" class="flex-1 column centre">
      <h1 class="page-title">Hello there</h1>
      <div class="content">
        <form
          class="form"
          name="contact"
          method="post"
          v-on:submit.prevent="handleSubmit"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
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
              class="input"
              id="name"
              type="text"
              name="name"
              autocomplete="name"
              required
              aria-required="true"
            />
          </div>
          <div class="row required">
            <label for="email">Email</label>
            <input
              class="input"
              id="email"
              type="text"
              name="email"
              autocorrect="off"
              autocapitalize="off"
              autocomplete="email"
              required
              aria-required="true"
            />
          </div>
          <div class="row">
            <label for="message">Message</label>
            <textarea class="textarea" id="message" name="message"></textarea>
          </div>&nbsp;
          <div class="row">
            <button
              class="inline-block px-4 py-2 font-bold text-black bg-orange-200 rounded hover:text-gray-300 hover:bg-gray-600 transition"
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
    title: "Contact"
  }
};
</script>
