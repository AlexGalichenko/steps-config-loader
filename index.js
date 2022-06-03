const { Before, After } = require('@cucumber/cucumber');
const yargs = require('yargs');
const argv = yargs(process.argv.slice(2)).argv;
const path = require('path');

Before(function () {
    //loading config
    global.config = require(path.join(process.cwd(), argv.config ?? 'cucumber.json'))
});
