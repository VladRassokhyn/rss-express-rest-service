const usersRepo = require('./user.memory.repository');
const taskService = require("../tasks/task.service");

/**
 * @namespace UsersService
 */

/**
 * Get all users from repository
 *
 * @memberof UsersService
 * @category userService
 * @return {Promise<TUser[]>}
 */
const getAll = () => usersRepo.getAll();

/**
 * Send new user data to repository for adding
 *
 * @category userService
 * @memberof UsersService
 * @param userData {TUser} - data of new user
 * @return {Promise<Object<{TUser}>>}
 */
const postUser = (userData) => usersRepo.postUser(userData);

/**
 * Send user id to repository for searching
 *
 * @category userService
 * @memberof UsersService
 * @param id {string} - id of searching user
 * @return {Promise<Object<{TUser}>>}
 */
const getUserById = (id) => usersRepo.getUserById(id)

/**
 * Send data for update user to memory repository
 *
 * @category userService
 * @memberof UsersService
 * @param id {string} - id of updating user
 * @param userData {TUser} - new data to update
 * @return {Promise<Object<{TUser}>>}
 */
const updateUser = (id, userData) => usersRepo.updateUser(id, userData)

/**
 * Send id to tasksService to delete association with user. After that send to repository user id for remove
 *
 * @category userService
 * @memberof UsersService
 * @param id {string}
 * @return {Promise<Object<{TUser}>>}
 */
const removeUser = async (id) => {
  await taskService.removeTasksFromUser(id);
  return usersRepo.removeUser(id);
}

module.exports = { getAll, postUser, getUserById, updateUser, removeUser };
