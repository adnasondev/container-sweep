const stopDaemonHandler = require('../lib/handler').stopDaemonHandler

exports.command = 'stop';
exports.desc = 'Stops Container Sweep.';

exports.handler = async argv => {
    stopDaemonHandler()
};