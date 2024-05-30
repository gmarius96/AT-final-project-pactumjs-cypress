const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      this.defaultCommandTimeout=20000,
      this.requestTimeout=20000,
      this.pageLoadTimeout=20000
    },
  },
});
