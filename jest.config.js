const sass = require('node-sass');

module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  transform: {
    '^.+\\.svelte$': 'svelte-test/transform',
  },
  globals: {
    svelte: {
      preprocess: {
        style: async ({ content, attributes }) => {
          if (attributes.type !== 'text/scss' && attributes.lang !== 'scss') return; // lang is now taken into account

          return new Promise((resolve, reject) => {
            sass.render(
              {
                data: content,
                sourceMap: true,
                outFile: 'x', // this is necessary, but is ignored
              },
              (err, result) => {
                if (err) return reject(err);

                resolve({
                  code: result.css.toString(),
                  map: result.map.toString(),
                });
              },
            );
          });
        },
      },
      compilerOptions: {
        accessors: true,
      },
    },
  },
};