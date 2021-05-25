import { TBoard } from '../../types';

const { v4: uuidv4 } = require('uuid');
const Board = require('./board.model.ts');

/**
 * @namespace BoardsRepository
 */

/**
 *
 * @type {Array<{TBoard}>}
 */
const boards: Array<TBoard> = [];

/**
 * Get all boards from database
 *
 * @memberOf BoardsRepository
 * @return {Promise<Array<{TBoard}>>}
 */
const getAll = async () => boards;

/**
 * Add new board to database
 *
 * @memberOf BoardsRepository
 * @param boardData {TBoard} - new board data
 * @return {Promise<{TBoard}>}
 */
const postBoard = async (boardData: TBoard) => {
  boards.push(new Board({ ...boardData, id: uuidv4() }));
  return boards[boards.length - 1];
};

/**
 * Search board in database by id
 *
 * @memberOf BoardsRepository
 * @param id {string} - searching board id
 * @return {Promise<{TBoard}>}
 */
const getBoardById = async (id: string) =>
  boards.find((board) => board.id === id);

/**
 * Update board info in database by id
 *
 * @memberOf BoardsRepository
 * @param id {string} - id of updating board
 * @param boardData {TBoard} - data to update
 * @return {Promise<{TBoard}>}
 */
const updateBoard = async (id: string, boardData: TBoard) => {
  const board = await getBoardById(id);
  if (board) {
    const index = boards.indexOf(board);
    boards[index] = { ...board, ...boardData };
    return boards[index];
  }
  return null;
};

/**
 * Remove board from database by id
 *
 * @memberOf BoardsRepository
 * @param id {string} - id of deleting board
 * @return {Promise<{TBoard}>}
 */
const removeBoard = async (id: string) => {
  const board = await getBoardById(id);
  if (board) {
    const index = boards.indexOf(board);
    boards.splice(index, 1);
    return board;
  }
  return null;
};

module.exports = { getAll, postBoard, getBoardById, updateBoard, removeBoard };
