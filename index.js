const { Before, After } = require('@cucumber/cucumber');
const path = require('path');
const memory = require('@cucumber-e2e/memory2');

Before(function () {
    const configPath = process.env.CONFIG;
    const profile = process.env.PROFILE;
    global.config = require(path.join(process.cwd(), configPath))[profile];
});

Before(function () {
    memory.register(config.memory ?? {});
});
