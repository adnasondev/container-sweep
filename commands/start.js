const startDaemonHandler = require('../lib/handler').startDaemonHandler;

exports.command = 'start';
exports.desc = 'Starts Container Sweep.';

exports.handler = async argv => {
    startDaemonHandler();
};