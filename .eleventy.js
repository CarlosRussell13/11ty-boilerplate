// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("styles");

    eleventyConfig.addShortcode("Planets", Function (Name, Name2, AU) {
        return `<div class="planet">
    <div class="circle ${name2}"></div>
    <h1 class="name">${name}</h1>
    <p>${AU}</p>
  </div>`
    })

};