const { v4: uuidv4 } = require('uuid');
const Task = require('./task.model');


/**
 * The tasks database
 *
 * @type {TTask[]}
 */
let tasks = [];

/**
 * Get all tasks from database
 *
 * @category TaskRepository
 * @return {Promise<TTask[]>}
 */
const getAll = async () => tasks;

/**
 * Add new task to database
 *
 * @category TaskRepository
 * @param taskData {Object<TTask>} - Serviced Data of new task from request
 * @param boardId {string} - id of associated board
 * @return {Promise<Object<TTask>>}
 */
const postTask = async (taskData, boardId) => {
  tasks.push(new Task({ ...taskData, id: uuidv4(), boardId }));
  return tasks[tasks.length - 1];
};

/**
 * Get task by id from database
 *
 * @category TaskRepository
 * @param id {string} - looking task id
 * @return {Promise<Object<TTask>>}
 */
const getTaskById = async (id) => tasks.find(task => task.id === id);

/**
 * Update data of selected task in database
 *
 * @category TaskRepository
 * @param id {string} - selected task id
 * @param taskData {TTask} - data to update
 * @return {Promise<Object<TTask>>}
 */
const updateTask = async (id, taskData) => {
  const task = await getTaskById(id);
  const index = tasks.indexOf(task);
  tasks[index] = { ...task, ...taskData };
  return tasks[index];
};

/**
 * Remove task from database
 *
 * @category TaskRepository
 * @param id {string} - selected task id
 * @return {Promise<Object<TTask>>}
 */
const removeTask = async (id) => {
  const task = await getTaskById(id);
  const index = tasks.indexOf(task);
  tasks.splice(index, 1);
  return task;
};

/**
 * Remove tasks from associated board
 *
 * @category TaskRepository
 * @param boardId {string} - associated board id
 * @return {Promise<void>}
 */
const removeTasksFromBoard = async (boardId) => {
  tasks = tasks.filter(t => t.boardId !== boardId);
};

/**
 * Remove task which associated with user
 *
 * @category TaskRepository
 * @param userId {string} - id of user
 * @return {Promise<void>}
 */
const removeTasksFromUser = async (userId) => {
  tasks = tasks.map(t =>
    t.userId === userId
      ? { ...t, userId: null }
      : t
  );
};

module.exports = { getAll, postTask, getTaskById, updateTask, removeTask, removeTasksFromBoard, removeTasksFromUser };
