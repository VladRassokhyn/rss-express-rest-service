import {v4 as uuidv4 } from 'uuid';

export type TColumn = {
  id: string;
  title: string;
  order: number;
};

/**
 * @typedef {Object<{
 *   id: string,
 *   title: string,
 *   columns: Array<{TColumns}>
 * }>} TBoard
 */

export class Board {
  id: string;

  title: string;

  columns: Array<TColumn | null>;

  /**
   * @param id {string}
   * @param title {string}
   * @param columns {Array<{TColumn}> | null}
   */
  constructor({ id = uuidv4(), title = 'title', columns = [null] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}
