const usersRepo = require('./user.memory.repository');
const taskService = require("../tasks/task.service");

const getAll = () => usersRepo.getAll();
const postUser = (userData) => usersRepo.postUser(userData);
const getUserById = (id) => usersRepo.getUserById(id)
const updateUser = (id, userData) => usersRepo.updateUser(id, userData)
const removeUser = async (id) => {
  await taskService.removeTasksFromUser(id);
  return usersRepo.removeUser(id);
}

module.exports = { getAll, postUser, getUserById, updateUser, removeUser };
