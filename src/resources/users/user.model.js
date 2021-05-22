const uuid = require('uuid');


/**
 * @typedef {Object.<{
 *   id: string,
 *   name: string,
 *   login: string,
 *   password: string,
 *   toResponse: toResponse
 * }>} TUser
 */

class User {
  /**
   * @param id {string} - user id
   * @param name {string} - user name
   * @param login {string} - user login
   * @param password {string} - user password
   */
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * @function toResponse
   * @param {TUser} user - user to transform
   * @return {Object<{name: string,id: string,login: string}>}
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
