const Docker = require('dockerode');
const common = require('./common');
const fs     = require('fs');

let Config = common.getConfig();
const docker = new Docker(Config);

const getContainers = () => {
    return new Promise((resolve, reject) => {
        docker.listContainers({all: true}, (err, containers) => {
            if (err) reject(err);
            else resolve(containers);
        });
    });
};

module.exports = getContainers;