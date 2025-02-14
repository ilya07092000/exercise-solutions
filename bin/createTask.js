const fsPromises = require('fs').promises;
const checkDirectory = require('./checkDirectory');
const path = require('path');
const {LeetcodeTaskProvider} = require('./taskProviders');

/**
 * constants
 */
const JS_PATH = path.resolve(__dirname, '../js');
const SQL_PATH = path.resolve(__dirname, '../sql');
const PY_PATH = path.resolve(__dirname, '../py');
const taskTypes = {
  SQL: 'sql',
  JS: 'js',
  PY: 'py',
};
const TASK_PROVIDERS = {
  LEETCODE: 'leetcode',
};

const taskPathsByType = {
  [taskTypes.SQL]: SQL_PATH,
  [taskTypes.JS]: JS_PATH,
  [taskTypes.PY]: PY_PATH,
};
const taskExtensionByType = {
  [taskTypes.SQL]: 'sql',
  [taskTypes.JS]: 'ts',
  [taskTypes.PY]: 'py',
};
const taskProviders = {
  [TASK_PROVIDERS.LEETCODE]: LeetcodeTaskProvider,
};

/**
 * creates readme file with necessary info and task file depends on task type
 */
const createTask = async ({
  taskType = 'js',
  taskLink,
  taskProvider,
  taskDifficulty,
}) => {
  // check whether task provider is valid
  if (!Object.values(TASK_PROVIDERS).includes(taskProvider)) {
    throw new Error(
      `${taskProvider} provider does not exist! Valid providers are: ${Object.keys(
        TASK_PROVIDERS,
      ).join(', ')}`,
    );
  }

  // check that task type is valid
  if (!Object.values(taskTypes).includes(taskType)) {
    throw new Error(
      `Task type "${taskType}" does not exists. Available task types - "${Object.values(
        taskTypes,
      )}"`,
    );
  }

  // extract task info in corresponding provider
  const taskInfo = new taskProviders[taskProvider]({taskUrl: taskLink});
  await taskInfo.init();

  taskInfo.difficulty = taskDifficulty;

  // identify task directory by task type
  const taskPath = path.join(taskPathsByType[taskType], taskInfo.taskName);
  // check that this directory does not exist yet
  checkDirectory(taskPath);

  await fsPromises.mkdir(taskPath);

  await createMdFile({taskPath, taskInfo});
  await createSolutionFile({
    taskPath,
    extension: taskExtensionByType[taskType],
  });
};

// create md file
const createMdFile = async ({taskPath, taskInfo}) => {
  await fsPromises.appendFile(
    path.join(taskPath, 'README.md'),
    `## Task Provider - ${taskInfo.providerName} (${taskInfo.difficulty})

${taskInfo.taskUrl && `[Task Link](${taskInfo.taskUrl})`}`,
  );
};

// create task solution file
const createSolutionFile = async ({taskPath, extension}) => {
  await fsPromises.appendFile(path.join(taskPath, `index.${extension}`), '');
};

module.exports = createTask;
