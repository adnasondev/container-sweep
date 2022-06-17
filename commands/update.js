const fs = require('fs');
const config = require('config');

exports.command = 'update <range>';
exports.desc = 'Updates the criteria for containers to delete.';

exports.builder = yargs => {
    yargs.options({
        'name': {
            describe: 'The name criteria of containers to delete.',
            default: '*',
            type: 'string'
        },
        'age': {
            describe: 'The age criteria of containers to delete.',
            default: 0,
            type: 'number'
        }
    });
};

exports.handler = async arguments => {
    config.name = arguments.name
    config.age = arguments.age
    config.range = arguments.range
    updateCriteriaHandler(config)
};

