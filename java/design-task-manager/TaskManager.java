import java.util.*;

class TaskManager {
    public PriorityQueue<Task> queue;
    public HashMap<Integer, Task> tasksMap;

    static class Task implements Comparable<Task> {
        public int userId;
        public int taskId;
        public int priority;

        public Task(int userId, int taskId, int priority) {
            this.userId = userId;
            this.taskId = taskId;
            this.priority = priority;
        }

        @Override
        public int compareTo(Task task) {
            if (this.priority == task.priority) {
                return task.taskId - this.taskId;
            }

            return task.priority - this.priority;
        }
    }

    public TaskManager(List<List<Integer>> tasks) {
        this.queue = new PriorityQueue<Task>();
        this.tasksMap = new HashMap();

        for (int i = 0; i < tasks.size(); i += 1) {
            List<Integer> taskData = tasks.get(i);

            this.add(taskData.get(0), taskData.get(1), taskData.get(2));
        }
    }

    public void add(int userId, int taskId, int priority) {
        Task taskToAdd = new Task(userId, taskId, priority);
        queue.add(taskToAdd);
        tasksMap.put(taskId, taskToAdd);
    }

    public void edit(int taskId, int newPriority) {
        Task taskToEdit = this.tasksMap.get(taskId);

        if (taskToEdit == null) {
            return;
        }

        Task updatedTask = new Task(taskToEdit.userId, taskId, newPriority);

        this.tasksMap.put(taskId, updatedTask);
        this.queue.add(updatedTask);
    }

    public void rmv(int taskId) {
        this.tasksMap.remove(taskId);
    }

    public int execTop() {
        while (this.queue.size() > 0) {
            Task top = this.queue.poll();
            Task actualTask = tasksMap.get(top.taskId);

            if (actualTask == null || top.priority != actualTask.priority) {
                continue;
            }

            tasksMap.remove(top.taskId);
            return actualTask.userId;
        }

        return -1;
    }
}
