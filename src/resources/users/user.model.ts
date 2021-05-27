import {v4 as uuidv4} from 'uuid';

/**
 * @typedef {Object.<{
 *   id: string,
 *   name: string,
 *   login: string,
 *   password: string,
 *   toResponse: Function
 * }>} TUser
 */

export class User {
  id: string;

  name: string;

  login: string;

  password: string;

  /**
   * @param id {string} - user id
   * @param name {string} - user name
   * @param login {string} - user login
   * @param password {string} - user password
   */
  constructor({
    id = uuidv4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: typeof User.prototype) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

