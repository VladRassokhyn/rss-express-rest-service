import { TBoard } from '../../types';

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
  constructor({ id , title, columns }: TBoard) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}
