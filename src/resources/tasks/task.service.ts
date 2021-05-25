import { TTask } from '../../types';

const taskRepo = require('./task.memory.repository.ts');
/**
 * @namespace TasksService
 */

/**
 * Get all users from repository
 *
 * @category TasksService
 * @memberof TasksService
 * @function getAll
 * @returns {Promise<TTask[]>}
 */
const getAll = () => taskRepo.getAll();

/**
 * Send new task data to repository
 *
 * @category TasksService
 * @memberof TasksService
 * @param {Object} taskData - data of task from request
 * @param {string} boardId - id of associated board
 * @returns {Promise<Object<TTask>> | null}
 */
const postTask = (taskData: TTask, boardId: string) =>
  taskRepo.postTask(taskData, boardId);

/**
 * Get task by id from repository
 *
 * @category TasksService
 * @memberof TasksService
 * @param {string} taskId - id of finding task
 * @returns {Promise<Object<TTask>> | null}
 */
const getTaskById = (taskId: string) => taskRepo.getTaskById(taskId);

/**
 * Send Updated task data to repository
 *
 * @category TasksService
 * @memberof TasksService
 * @param {Object} taskData - data of task from request
 * @param {string} taskId - id of task that will updated
 * @returns {Promise<Object<TTask>> | null}
 */
const updateTask = (taskData: TTask, taskId: string) =>
  taskRepo.updateTask(taskId, taskData);

/**
 * Send to repository id of task that must be deleted

 * @category TasksService
 * @memberof TasksService
 * @param {string} taskId - id of task that will updated
 * @returns {Promise<Object<TTask>> | null}
 */
const removeTask = (taskId: string) => taskRepo.removeTask(taskId);

/**
 * Send to repository boardId for find and delete tasks for associated board
 *
 * @category TasksService
 * @memberof TasksService
 * @param {string} boardId - id of board what was deleted
 * @returns {Promise<Object<TTask>> | null}
 */
const removeTasksFromBoard = (boardId: string) =>
  taskRepo.removeTasksFromBoard(boardId);

/**
 * Send to repository userId for find and unsubscribe task from user
 *
 * @category TasksService
 * @memberof TasksService
 * @param {string} userId - id of user what was deleted
 * @returns {Promise<Object<TTask>> | null}
 */
const removeTasksFromUser = (userId: string) =>
  taskRepo.removeTasksFromUser(userId);

module.exports = {
  getAll,
  postTask,
  getTaskById,
  updateTask,
  removeTask,
  removeTasksFromBoard,
  removeTasksFromUser,
};
