const { defineConfig } = require('cypress');

module.exports = defineConfig({
  //reporter: 'cypress-mochawesome-reporter', // a ajouter
  reporter: 'junit', 
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);// a ajouter
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  reporterOptions: {
      mochaFile: 'results/my-test-output.xml',
      toConsole: true,
    },
  },
});