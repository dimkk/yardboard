const os = require('os');
getusername = function() {
	var username =  require('child_process').execSync( "whoami", { encoding: 'utf8', timeout: 1000 } );
	return String(username).trim();
};

const getInfo = () => {
    if (os.platform() === 'darwin') {
        return {
            ip: '192.168.99.100',
            port: '2376',
            proto: 'https',
            cert: '/users/'+ getusername() +'/.docker/machine/certs'
        };
    }
    if (os.platform() === 'win32') {
        return {
            ip: 'localhost',
            port: '2375',
            proto: 'http',
            cert: 'c:\\users\\' + process.env.username + '\\.docker\\machine\\certs'
        };
    }
}

const getPort = () => {
    if (os.platform() === 'darwin') {
        return 2376;
    }
    if (os.platform() === 'win32') {
        return 2375;
    }
}

const getConfig = () => {
    let cfg = {
        protocol: getInfo().proto,
        host: process.env.DOCKER_HOST || getInfo().ip,
        port: process.env.DOCKER_PORT || getInfo().port,
    };
    if (os.platform() !== 'win32') {
        Object.assign(cfg, {
            ca: fs.readFileSync((process.env.DOCKER_CERT_PATH || getInfo().cert) + '/ca.pem'),
            cert: fs.readFileSync((process.env.DOCKER_CERT_PATH  || getInfo().cert) + '/cert.pem'),
            key: fs.readFileSync((process.env.DOCKER_CERT_PATH || getInfo().cert) + '/key.pem')
        });
    }
    return cfg;
}

module.exports = { getConfig };