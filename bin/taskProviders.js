const axios = require('axios');

class BaseTaskProvider {
  taskName;
  taskUrl;
  taskData;
  providerName;

  constructor({taskUrl}) {
    this.taskUrl = taskUrl;
  }

  extractTaskName() {
    throw new Error('Method Not Implemented!');
  }

  async fetchTask() {
    try {
      const result = await axios.get(this.taskUrl);
      this.taskData = result.data;
    } catch (e) {
      console.error(
        `Smth went wrong while fetching data for ${this.providerName} by ${this.taskUrl} url`,
      );
    }
  }

  async init() {
    await this.fetchTask();
    this.extractTaskName();
  }
}

class LeetcodeTaskProvider extends BaseTaskProvider {
  difficulty;

  constructor(params) {
    super(params);
    this.validDifficultyValues = ['easy', 'medium', 'hard'];
    this.providerName = 'Leetcode';
  }

  /**
   * extract task name based on url
   */
  extractTaskName() {
    const regex =
      /\/problems\/([^\/]+)\/(?:description|submissions|solutions|editorial)\//;
    const match = regex.exec(this.taskUrl);
    const taskName = match && match[1];
    this.taskName = taskName;
    return this.taskName;
  }

  /**
   * extract task difficulty based on task content fetched by url
   */
  async extractTaskDifficulty() {
    const regex = /"difficulty"\s*:\s*"([^"]+)"/;
    const match = this.taskData.match(regex);
    const difficultyValue = (match && match[1]).toLowerCase();
    if (!this.validDifficultyValues.includes(difficultyValue)) {
      throw new Error(
        `${difficultyValue} is not valid difficulty for ${this.providerName} provider`,
      );
    }

    this.difficulty = difficultyValue;
  }

  async init() {
    /**
     * Data fetching from leetcode does not work so far
     */
    // await super.init();
    // this.extractTaskDifficulty();
    this.extractTaskName();
  }
}

module.exports = {
  LeetcodeTaskProvider,
};
