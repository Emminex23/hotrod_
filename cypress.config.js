const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        video: false,
        experimentalStudio: true,
        browser: 'chrome',
        env: {
            HOTROD_NAMESPACE: 'hotrod',
            SIGNADOT_ROUTING_KEY: '',
        },
        setupNodeEvents(on, config) {
        // implement node event listeners here
        },
        baseUrl: "http://frontend.hotrod.svc:8080"
    },
});
