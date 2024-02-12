// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("styles");
    
    eleventyConfig.addShortcode("planet", function(name, nameofplanet, AU) {

      return `<div class="planets">

      <div class="circle ${nameofplanet}"></div>

      <h2 class="name">${name}</h2>

      <p>${AU}</p>

    </div>`

    })

  };