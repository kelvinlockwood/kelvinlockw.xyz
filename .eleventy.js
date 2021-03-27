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
  config.addNunjucksFilter('displayUrl', function (url) {
    const pattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&=]*)/;
    const ret = url.match(pattern);
    return ret ? ret[0] : url;
  });
  config.addNunjucksFilter('displayTags', function (tags) {
    // should match the list in tags.njk
    return (tags || []).filter(
      (tag) => ['all', 'nav', 'note', 'article', 'product'].indexOf(tag) === -1
    );
  });
  config.addNunjucksFilter('byTag', function (collection, tag) {
    // should match the list in tags.njk
    if (!collection) {
      return;
    }
    return collection.filter((i) => {
      if (!i) return false;
      if (!i.data.tags) return false;
      return i.data.tags.some((t) => t.toLowerCase() == tag.toLowerCase());
    });
  });
  // Create an array of all tags
  config.addCollection('tagList', function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });

    return [...tagSet];
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
