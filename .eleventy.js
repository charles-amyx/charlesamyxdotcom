const fs = require('fs');
const Image = require("@11ty/eleventy-img");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const schema = require("@quasibit/eleventy-plugin-schema");


module.exports = function (config) {

  // Static assets to pass through
  config.addPassthroughCopy('./src/images');
  config.addPassthroughCopy('./src/public');
  config.addPassthroughCopy('./src/styles');
  config.addPassthroughCopy('./src/main.js');
  config.addPlugin(eleventyNavigationPlugin)

  // Get the current year - super useful for copyright dates.
  // Usage: {% year %}

  config.addShortcode("year", () => `${new Date().getFullYear()}`);


  // add structured data plugin
  config.addPlugin(schema);


  return {
    dir: {
      input: 'src',
      output: '_site',
    },
    passthroughFileCopy: true,
    templateFormats: ['html', 'md', 'njk'],
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };

};

