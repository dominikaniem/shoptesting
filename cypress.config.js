const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'j2zx5y',
viewportHeight: 800,
viewportWidth: 1200,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://tapsshop.pl/'
  }
});