module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  transform: {
    '^.+\\.svelte$': 'svelte-test/transform',
  },
  globals: {
    svelte: {
      preprocess: preprocess(),
      compilerOptions: {
        accessors: true,
      },
    },
  },
};