const taskRepo = require('./task.memory.repository');

const getAll = () => taskRepo.getAll();
const postTask = (taskData, boardId) => taskRepo.postTask(taskData, boardId);
const getTaskById = (taskId) => taskRepo.getTaskById(taskId);
const updateTask = (taskData, taskId) => taskRepo.updateTask(taskId, taskData);
const removeTask = (taskId) => taskRepo.removeTask(taskId);
const removeTasksFromBoard = (boardId) => taskRepo.removeTasksFromBoard(boardId);
const removeTasksFromUser = (userId) => taskRepo.removeTasksFromUser(userId);

module.exports = { getAll, postTask, getTaskById, updateTask, removeTask, removeTasksFromBoard, removeTasksFromUser };
