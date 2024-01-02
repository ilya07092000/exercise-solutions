const fsPromises = require('fs').promises;
const checkDirectory = require('./checkDirectory');
const path = require('path');

/**
 * constants
 */
const JS_PATH = path.resolve(__dirname, '../js');
const SQL_PATH = path.resolve(__dirname, '../sql');
const taskTypes = {
	SQL: 'sql',
	JS: 'js',
};
const taskPathsByType = {
	[taskTypes.SQL]: SQL_PATH,
	[taskTypes.JS]: JS_PATH,
};
const taskExtensionByType = {
	[taskTypes.SQL]: 'sql',
	[taskTypes.JS]: 'ts',
};

const createTask = async ({ taskName, taskType = 'js', taskLink }) => {
	// check that task type is valid
	if (!Object.values(taskTypes).includes(taskType)) {
		throw new Error(
			`Task type "${taskType}" does not exists. Available task types - "${Object.values(
				taskTypes
			)}"`
		);
	}

	// identify task directory by task type
	const taskPath = path.join(taskPathsByType[taskType], taskName);
	// check that this directory does not exist yet
	checkDirectory(taskPath);

	await fsPromises.mkdir(taskPath);
	// create md file
	await fsPromises.appendFile(
		path.join(taskPath, 'README.md'),
		`## Task Provider - Leetcode (easy)

${taskLink && `[Task Link](${taskLink})`}
    `
	);
	// create task solution file
	await fsPromises.appendFile(
		path.join(taskPath, `index.${taskExtensionByType[taskType]}`),
		''
	);
};

module.exports = createTask;
