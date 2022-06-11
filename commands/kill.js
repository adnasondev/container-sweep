const Job = require('cron').CronJob
const Docker = require('dockerode');

const dockerClient = new Docker({
    host: '192.168.65.10',
    port: process.env.DOCKER_PORT || 2375,
    socketPath: '/var/run/docker.sock'
});

exports.command = 'kill';
exports.desc = 'Deletes a Docable Notebook.';
exports.builder = yargs => {
    yargs.options({
        'name': {
            alias: 'n',
            describe: 'The name of containers to delete.',
            demandOption: true,
            type: 'string'
        },
    });
};

exports.handler = async argv => {
    console.log(dockerClient)
};