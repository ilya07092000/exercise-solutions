#!/usr/bin/env node
// console.log(process.argv);

const prompts = require('prompts');
const createTask = require('./createTask');

const questions = [
  {
    type: 'select',
    name: 'taskProvider',
    message: 'Select Task Provider',
    choices: [{title: 'Leetcode', value: 'leetcode'}],
  },
  {
    type: 'select',
    name: 'taskType',
    message: 'What Type Of Task Do You Need?',
    choices: [
      {title: 'JS', value: 'js'},
      {title: 'SQL', value: 'sql'},
    ],
  },
  {
    type: 'text',
    name: 'taskLink',
    message: 'Task Link',
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
