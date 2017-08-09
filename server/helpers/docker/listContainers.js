const Docker = require('dockerode');
const helpers = require('../');
const fs     = require('fs');

let Config = helpers.getConfig();
const docker = new Docker(Config);

const getContainers = () => {
    return new Promise((resolve, reject) => {
        docker.listContainers({all: true}, (err, containers) => {
            if (err) reject(err);
            else resolve(containers);
        });
    })
}

module.exports = getContainers;