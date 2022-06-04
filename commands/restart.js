exports.command = 'restart';
exports.desc = 'Restarts a Docable Notebook';
exports.builder = yargs => {
    yargs.options({
    });
};

exports.handler = async argv => {
    console.log('Hello World!')
};