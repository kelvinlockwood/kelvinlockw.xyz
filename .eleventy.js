const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')

module.exports = (config) => {
  config.addPassthroughCopy({ public: './' })
  config.addPlugin(eleventyNavigationPlugin)

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
    // Tweak for Turbolinks & Browserstack Compatibility
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function (snippet, match) {
          return snippet + match
        },
      },
    },
  })
  config.setDataDeepMerge(true)

  return {
    templateFormats: ['md', 'njk', 'html', 'liquid'],
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
