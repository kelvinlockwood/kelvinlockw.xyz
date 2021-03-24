const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
// const pluginRss = require('@11ty/eleventy-plugin-rss')
// const markdownItAnchor = require('markdown-it-anchor');

const formatYear = new Intl.DateTimeFormat('en', { year: 'numeric' });
const formatMonth = new Intl.DateTimeFormat('en', { month: 'short' });
const formatDay = new Intl.DateTimeFormat('en', { day: '2-digit' });
const md = require('markdown-it');
const mdContainer = require('markdown-it-container');

const markdown = md({ html: true, breaks: true, linkify: true }).use(
  mdContainer,
  'codeblock',
  {
    render: function (tokens, idx) {
      if (tokens[idx].type === 'container_codeblock_open') {
        return `
          <div class="rounded-lg shadow-lg">
        `;
      }
      return `</div>`;
    },
  }
);
module.exports = (config) => {
  config.addPassthroughCopy({ public: './' });
  // plugins
  config.addPlugin(eleventyNavigationPlugin);
  config.addPlugin(pluginSyntaxHighlight);
  // config
  config.setLibrary('md', markdown);

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
    // Tweak for Turbolinks & Browserstack Compatibility
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function (snippet, match) {
          return snippet + match;
        },
      },
    },
  });
  config.setDataDeepMerge(true);
  // Nunjucks Filter
  config.addNunjucksFilter('displayDate', function (d) {
    const ye = formatYear.format(d);
    const mo = formatMonth.format(d);
    const da = formatDay.format(d);
    return `${da} ${mo} ${ye}`;
  });
  config.addNunjucksFilter('displayTags', function (tags) {
    // should match the list in tags.njk
    return (tags || []).filter(
      (tag) => ['all', 'nav', 'note', 'article'].indexOf(tag) === -1
    );
  });
  config.addNunjucksFilter('byTag', function (collection, tag) {
    // should match the list in tags.njk
    return (collection || []).filter((i) =>
      i.tags.some((t) => t.toLowerCase() == tag.toLowerCase())
    );
  });
  config.addCollection('myCollectionName', function (collectionApi) {
    // get unsorted items
    return collectionApi.getAll();
  });

  return {
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: false,
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
