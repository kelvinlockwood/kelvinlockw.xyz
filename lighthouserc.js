module.exports = {
    ci: {
        collect: {
            "numberOfRuns": 1,
            "staticDistDir": "./dist/pages"
          },
          assert: {
            assertions: {
                "categories:performance": ["warn", {minscore:0.7}],
                "categories:accessibility": ["warn", {minscore:0.7}],
                "categories:best-practices": ["warn", {minscore:0.7}],
                "categories:seo": ["warn", {minscore:0.7}],
                "offscreen-images": "off",
                "uses-webp-images": "off"
            }
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
}