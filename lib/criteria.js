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
    criteriaAge = criteria.age

    if (nameMeetsCriteria(containerName, criteriaName) && ageMeetsCriteria(containerAge, criteriaAge)) {
        return true
    } else {
        return false
    }
}

module.exports = {
    nameMeetsCriteria,
    ageMeetsCriteria,
    containerMeetsCriteria,
}