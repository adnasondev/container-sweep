const sweepContainersHandler = require('../lib/handler').sweepContainersHandler;
const cron = require('node-cron');
const config = require('config');
const express = require('express');
const app = express();

const name = config.get('name');
const age = config.get('age');
const range = config.get('range');

const PORT = 3000;
const HOST = 'localhost';

app.listen(PORT, err => {
    console.log(`Container Sweep daemon running on ${HOST} port: ${PORT}`);
    cron.schedule(range, () => {
        console.log('running a task every minute');
    });
});
