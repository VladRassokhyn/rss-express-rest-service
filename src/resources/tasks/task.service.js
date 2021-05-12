const { v4: uuidv4 } = require('uuid');
const taskRepo = require('./task.memory.repository');
const Task = require('./task.model');

const getAll = () => taskRepo.getAll();
const postTask = (taskData, boardId) => taskRepo.postTask(new Task({...taskData, id: uuidv4(), boardId}))
const getTaskById = (taskId) => taskRepo.getTaskById(taskId);
const updateTask = (taskData, taskId) => taskRepo.updateTask(taskId, taskData);
const removeTask = (taskId) => taskRepo.removeTask(taskId);

module.exports = { getAll, postTask, getTaskById, updateTask, removeTask };
