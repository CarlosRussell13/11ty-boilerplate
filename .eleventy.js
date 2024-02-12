// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("styles");
    
    eleventyConfig.addShortcode("Planets", function(name, nameofplanet, AU) {

      return `<div class="planet">

      <div class="${name} circle"></div>

      <h2 class="name">${nameofplanet}</h2>

      <p>${AU}</p>

    </div>`

    })

  };