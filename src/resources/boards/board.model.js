const uuid = require('uuid');

/**
 * @typedef {Object<{
 *   id: string,
 *   title: string,
 *   columns: Array<{TColumns}>
 * }>} TBoard
 */

class Board {
  /**
   * @param id {string}
   * @param title {string}
   * @param columns {Array<{TColumn}> | null}
   */
  constructor({
    id = uuid(),
    title = 'title',
    columns = [null]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
