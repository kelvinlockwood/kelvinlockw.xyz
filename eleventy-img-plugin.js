const Image = require('@11ty/eleventy-img');

(async () => {
  let stats = await Image('https://source.unsplash.com/random/720', {
    formats: ['jpeg', 'jpg'],
  });

  console.log(stats);
})();