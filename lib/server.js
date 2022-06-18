const killContainers = require('../lib/util').killContainers;
const cron = require('node-cron');
const config = require('config');
const express = require('express');
const app = express();

const name = config.get('name');
const age = config.get('age');
const range = config.get('range');

const PORT = 3000;

app.listen(PORT, err => {
    cron.schedule(range, () => {
        console.log(`Deleting containers with name: ${name} and age: ${age}`);
        killContainers({name, age});
    });
});
