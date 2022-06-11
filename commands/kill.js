const Docker = require('dockerode');
const docker = new Docker()

const MINUTES_IN_HOUR = 60

function nameMeetsCriteria(containerName, criteriaName) {
    if (criteriaName === '*') {
        return true
    } else {
        return criteriaName.includes(containerName)
    }
}

function ageMeetsCriteria(containerAge, criteriaAge) {
    return containerAge >= criteriaAge
}

function containerMeetsCriteria(container, criteria) {
    containerName = container.Names[0]
    containerAge = parseInt(container.Status.replace(/^\D+/g, '')) * MINUTES_IN_HOUR
    criteriaName = criteria.name
    criteriaAge = parseInt(criteria.age)

    if (nameMeetsCriteria(containerName, criteriaName) && ageMeetsCriteria(containerAge, criteriaAge)) {
        return true
    } else {
        return false
    }
}

async function killContainer(container) {
    await docker.getContainer(container.Id).remove({ force: true });
}

async function killContainersHandler(criteria) {
    docker.listContainers((error, containers) => {
        if (containers) {
            containers.forEach(async container => {
                if (containerMeetsCriteria(container, criteria)) {
                    await killContainer(container)
                }
            })
        }
    })
}

exports.command = 'kill';
exports.desc = 'Deletes a Docable Notebook.';
exports.builder = yargs => {
    yargs.options({
        'name': {
            describe: 'The name of containers to delete.',
            default: '*',
            type: 'string'
        },
        'age': {
            describe: 'The age of containers to delete.',
            default: '0',
            type: 'string'
        }
    });
};

exports.handler = async arguments => {
    killContainersHandler(arguments)
};