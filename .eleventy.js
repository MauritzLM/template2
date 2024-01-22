const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy('./src/assets');

    // date filter
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return new Date(dateObj).toLocaleDateString('en-gb', {
            weekday: 'short', year: "numeric", month: "short",
            day: "numeric"
        });
    });

    return {
        dir: {
            input: "src",
            output: "public",
            includes: "_includes"
        },
        htmlTemplateEngine: 'njk',
    }
};