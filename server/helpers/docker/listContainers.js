const Docker = require('dockerode');
const helpers = require('../');
const fs     = require('fs');

const docker = new Docker({
  protocol: 'https',
  host: process.env.DOCKER_HOST || '192.168.99.100',
  port: process.env.DOCKER_PORT || 2376,
  ca: fs.readFileSync((process.env.DOCKER_CERT_PATH || helpers.getCertAddress()) + '/ca.pem'),
  cert: fs.readFileSync((process.env.DOCKER_CERT_PATH  || helpers.getCertAddress()) + '/cert.pem'),
  key: fs.readFileSync((process.env.DOCKER_CERT_PATH || helpers.getCertAddress()) + '/key.pem')
});

const getContainers = () => {
    return new Promise((resolve, reject) => {
        docker.listContainers({all: true}, (err, containers) => {
            if (err) reject(err);
            else resolve(containers);
        });
    })
}

module.exports = getContainers;