const uuid = require('uuid');

/**
 * @typedef {Object.<{
 *   id: string,
 *   title: string,
 *   order: number,
 *   description: string,
 *   userId: string | null,
 *   boardId: string | null,
 *   columnId: string | null
 * }>} TTask
 */

class Task {
  /**
   * Task constructor
   *
   * @param id {string} - id of task
   * @param title {string} - short title
   * @param order {number} - order number (1-3)
   * @param description {string} - task description
   * @param userId {string | null} - id of associated user
   * @param boardId {string | null} - id of associated board
   * @param columnId {string | null} - id of associated column
   */
  constructor({
    id = uuid(),
    title = 'title',
    order = 0,
    description = 'description',
    userId = '1',
    boardId = '1',
    columnId = '1'
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;