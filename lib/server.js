const express = require('express');
const config = require('config');
const app = express();

const PORT = config.get('server.env.port')

const name = config.get('server.env.name');
const age = config.get('server.env.age');
const range = config.get('server.env.range');

app.listen(PORT, (err) => {
    console.log(`Container Sweep daemon running on port: ${PORT}`)
    console.log(name, age, range)
});
