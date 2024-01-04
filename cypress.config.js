const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
    includeShadowDom: true,

    retries: {
      runMode: 2,
      openMode: 2
    }
  },
});
