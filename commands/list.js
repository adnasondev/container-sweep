const listContainersHandler = require('../lib/handler').listContainersHandler;

exports.command = 'list';
exports.desc = 'Lists containers used by Docable.';

exports.handler = async argv => {
    listContainersHandler();
};