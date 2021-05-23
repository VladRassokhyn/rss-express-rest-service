const { v4: uuidv4 } = require('uuid');
const User = require('./user.model');

/**
 * @namespace UsersRepository
 */

/**
 *Users Database
 *
 * @type {TUser[]}
 */
const users = [];

/**
 * Get all users from database
 *
 * @memberOf UsersRepository
 * @category UsersRepository
 * @return {Promise<TUser[]> | null}
 */
const getAll = async () => users;

/**
 * Add user to database
 *
 * @memberOf UsersRepository
 * @category UsersRepository
 * @param userData {TUser} - serviced user data from request
 * @return {Promise<Object<{TUser}>> | null}
 */
const postUser = async (userData) => {
  users.push(new User({...userData, id: uuidv4()}));
  return users[users.length - 1];
};

/**
 * Get user from database by id
 *
 * @memberOf UsersRepository
 * @category UsersRepository
 * @param id {string} - id for find user
 * @return {Promise<Object<{TUser}>> | null}
 */
const getUserById = async (id) => users.find(user => user.id === id);

/**
 * Update user info
 *
 * @memberOf UsersRepository
 * @category UsersRepository
 * @param id {string} - id of updating user
 * @param userData {TUser} - data to update
 * @return {Promise<Object<{TUser}>> | null}
 */
const updateUser = async (id, userData) => {
  const user = await getUserById(id);
  const index = users.indexOf(user);
  users[index] = {...user, ...userData};
  return users[index];
};

/**
 * Remove user from database
 *
 * @memberOf UsersRepository
 * @category UsersRepository
 * @param id {string} - id of deleting user
 * @return {Promise<Object<{TUser}>> | null}
 */
const removeUser = async (id) => {
  const user = await getUserById(id);
  const index = users.indexOf(user);
  users.splice(index, 1);
  return user;
}

module.exports = { getAll, postUser, getUserById, updateUser, removeUser };
