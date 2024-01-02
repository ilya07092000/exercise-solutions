const fs = require('fs');

const checkDirectory = (path) => {
	if (!path) {
		throw new Error('Path Was Not Provided!');
	}

	if (fs.existsSync(path)) {
		throw new Error(`Directory "${path}" Exists!`);
	}

	return true;
};

module.exports = checkDirectory;
