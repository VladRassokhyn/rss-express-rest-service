const { v4: uuidv4 } = require('uuid');
const Board = require('./board.model');

/**
 * @namespace BoardsRepository
 */

/**
 *
 * @type {Array<{TBoard}>}
 */
const boards = [];

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
const postBoard = async (boardData) => {
  boards.push(new Board({...boardData, id: uuidv4()}));
  return boards[boards.length - 1];
};

/**
 * Search board in database by id
 *
 * @memberOf BoardsRepository
 * @param id {string} - searching board id
 * @return {Promise<{TBoard}>}
 */
const getBoardById = async (id) => boards.find(board => board.id === id);

/**
 * Update board info in database by id
 *
 * @memberOf BoardsRepository
 * @param id {string} - id of updating board
 * @param boardData {TBoard} - data to update
 * @return {Promise<{TBoard}>}
 */
const updateBoard = async (id, boardData) => {
  const board = await getBoardById(id);
  const index = boards.indexOf(board);
  boards[index] = {...board, ...boardData};
  return boards[index];
};

/**
 * Remove board from database by id
 *
 * @memberOf BoardsRepository
 * @param id {string} - id of deleting board
 * @return {Promise<{TBoard}>}
 */
const removeBoard = async (id) => {
  const board = await getBoardById(id);
  const index = boards.indexOf(board);
  boards.splice(index, 1);
  return board;
}

module.exports = { getAll, postBoard, getBoardById, updateBoard, removeBoard };
