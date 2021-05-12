const { v4: uuidv4 } = require('uuid');
const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => usersRepo.getAll();
const postUser = ({name,login,password}) => {
  const user = new User({name,login,password, id: uuidv4()})
  return usersRepo.postUser(user);
}
const getUserById = (id) => usersRepo.getUserById(id)
const updateUser = (id, userData) => usersRepo.updateUser(id, userData)
const removeUser = (id) => usersRepo.removeUser(id)

module.exports = { getAll, postUser, getUserById, updateUser, removeUser };
