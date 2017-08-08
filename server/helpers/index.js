const os = require('os');
getusername = function() {
	var username =  require('child_process').execSync( "whoami", { encoding: 'utf8', timeout: 1000 } );
	return String(username).trim();
};

const getCertAddress = () => {
    if (os.platform() === 'darwin') {
        return '/users/'+ getusername() +'/.docker/machine/certs';
    }
}

module.exports = {getCertAddress};