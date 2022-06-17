const exec = require('child_process').exec;
const Docker = require('dockerode');
const docker = new Docker();

function startDaemonHandler() {
    exec('pm2 start --name container-sweep lib/server.js', (error, stdout, stderr) => {});
}

function stopDaemonHandler() {
    exec('pm2 delete container-sweep', (error, stdout, stderr) => {});
}

function listContainersHandler() {
    docker.listContainers((error, containers) => {
        if (containers) {
            containers.forEach(async container => {
                console.log(container.Id)
            })
        }
    })
}

function updateCriteriaHandler(config) {
    fs.writeFile('config/default.json', JSON.stringify(config, null, 2), function writeJSON(error) {
        if (error) return console.log(error);
    });
}

async function sweepContainersHandler(criteria) {
    docker.listContainers((error, containers) => {
        if (containers) {
            containers.forEach(async container => {
                if (containerMeetsCriteria(container, criteria)) {
                    await docker.getContainer(container.Id).remove({ force: true });
                }
            })
        }
    })
}

module.exports = {
    startDaemonHandler,
    stopDaemonHandler,
    updateCriteriaHandler,
    listContainersHandler,
    sweepContainersHandler
}