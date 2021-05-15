const { v4: uuidv4 } = require('uuid');
const User = require('./user.model');

const users = [];

const getAll = async () => users;
const postUser = async (userData) => {
  users.push(new User({...userData, id: uuidv4()}));
  return users[users.length - 1];
};
const getUserById = async (id) => users.find(user => user.id === id);
const updateUser = async (id, userData) => {
  const user = await getUserById(id);
  const index = users.indexOf(user);
  users[index] = {...user, ...userData};
  return users[index];
};
const removeUser = async (id) => {
  const user = await getUserById(id);
  const index = users.indexOf(user);
  users.splice(index, 1);
  return user;
}

module.exports = { getAll, postUser, getUserById, updateUser, removeUser };
