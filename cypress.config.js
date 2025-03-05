const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'junit', // Set to junit only
  reporterOptions: {
    mochaFile: 'results/my-test-output-[hash].xml', // Specify the output path for the JUnit reports
    toConsole: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Remove the mochawesome reporter setup since you're not using it
      require('@cypress/grep/src/plugin')(config); // Keep grep plugin if you're using it
      return config;
    },
  },
});
