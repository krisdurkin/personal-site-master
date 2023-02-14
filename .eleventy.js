module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/scripts.js');
    eleventyConfig.addPassthroughCopy('./src/media');
    eleventyConfig.addPassthroughCopy('./src/fonts');

    return{
        dir: {
            input: "src",
            output: "public"
        }
    };
}