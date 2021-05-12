const users = [];

const getAll = async () => users;
const postUser = async (userData) => {
  users.push(userData);
  return userData;
};
const getUserById = async (id) => users.find(user => user.id === id);
const updateUser = async (id, {login, name, password}) => {
  const user = await getUserById(id);
  const index = users.indexOf(user);
  users[index] = {...user, login, name, password};
  return users[index];
};
const removeUser = async (id) => {
  const user = await getUserById(id);
  const index = users.indexOf(user);
  users.splice(index - 1, 1);
  return user;
}

module.exports = { getAll, postUser, getUserById, updateUser, removeUser };
