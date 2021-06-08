const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const Image = require('@11ty/eleventy-img');
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
  config.addPlugin(pluginRss);

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

  config.addNunjucksAsyncShortcode('myImage', async (src, alt) => {
    if (!alt) {
      throw new Error(`Missing \`alt\` on Image from: ${src}`);
    }

    let stats = await Image(src, {
      widths: [350, 808],
      formats: ['jpeg', 'webp'],
      urlPath: '/images/home/',
      outputDir: '/images/home/',
    });

    let lowestSrc = stats['jpeg'][0];
    let highResJpeg = stats['jpeg'][1];
    let lowReswebp = stats['webp'][0];
    let highReswebp = stats['webp'][1];

    const source = `<source type="image/webp" media="(max-width: 629px)" srcset="${lowReswebp.url}" >
                    <source type="image/webp" media="(min-width: 630px)" srcset="${highReswebp.url}" >
                    <source type="image/jpeg" media="(max-width: 529px)" srcset="${lowestSrc.url}" >
                    <source type="image/jpeg" media="(min-width: 630px)" srcset="${highResJpeg.url}" >`;

    const img = `<img 
                loading="lazy" 
                alt="${alt}" 
                width="${highResJpeg.width}"
                height="${highResJpeg.height}"
                src="${lowestSrc.url}">`;

    return `<picture>${source}${img}</picture>`;
  });

  // Create an array of all tags
  config.addCollection('tagList', function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => {
        tagSet.add(tag.toLowerCase());
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
