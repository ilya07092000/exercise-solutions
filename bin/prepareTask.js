#!/usr/bin/env node
// console.log(process.argv);

const prompts = require('prompts');
const createTask = require('./createTask');

const questions = [
	{
		type: 'select',
		name: 'taskType',
		message: 'What Type Of Task Do You Need?',
		choices: [
			{ title: 'JS', value: 'js' },
			{ title: 'SQL', value: 'sql' },
		],
	},
	{
		type: 'text',
		name: 'taskName',
		message: 'What is the task name? (eg. find-sum)',
		validate: (value) => (!!value ? true : 'Specify Task Name, please!'),
	},
	{
		type: 'text',
		name: 'taskLink',
		message: 'Task Link (optional)',
	},
];

(async () => {
	try {
		const response = await prompts(questions);
		await createTask(response);
		console.log('\x1b[44m', 'TASK DIRECTORY WAS CREATED!');
	} catch (e) {
		console.error(e);
	}
})();
