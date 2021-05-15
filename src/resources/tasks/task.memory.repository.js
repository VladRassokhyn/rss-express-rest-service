const { v4: uuidv4 } = require('uuid');
const Task = require('./task.model');

let tasks = [];

const getAll = async () => tasks;
const postTask = async (taskData, boardId) => {
  tasks.push(new Task({ ...taskData, id: uuidv4(), boardId }));
  return tasks[tasks.length - 1];
};
const getTaskById = async (id) => tasks.find(task => task.id === id);
const updateTask = async (id, taskData) => {
  const task = await getTaskById(id);
  const index = tasks.indexOf(task);
  tasks[index] = { ...task, ...taskData };
  return tasks[index];
};
const removeTask = async (id) => {
  const task = await getTaskById(id);
  const index = tasks.indexOf(task);
  tasks.splice(index, 1);
  return task;
};
const removeTasksFromBoard = async (boardId) => {
  tasks = tasks.filter(t => t.boardId !== boardId);
};
const removeTasksFromUser = async (userId) => {
  tasks = tasks.map(t =>
    t.userId === userId
      ? { ...t, userId: null }
      : t
  );
};

module.exports = { getAll, postTask, getTaskById, updateTask, removeTask, removeTasksFromBoard, removeTasksFromUser };
