const exec = require('child_process').exec;

exports.command = 'start';
exports.desc = 'Starts the daemon for container-sweep.';
exports.builder = yargs => {
    yargs.options({
    });
};

exports.handler = async argv => {
    exec('pm2 start --name container-sweep config/default.json --watch', (error, stdout, stderr) => {

        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
};