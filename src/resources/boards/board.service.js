const boardRepo = require('./board.memory.repository');
const taskService = require("../tasks/task.service");

/**
 * @namespace BoardsService
 */

/**
 * Get all boards from repository
 *
 * @memberOf BoardsService
 * @category boardService
 * @return {Promise<Array<{TBoard}>>}
 */
const getAll = () => boardRepo.getAll();

/**
 * Send new board data to repository for adding to db
 *
 * @memberOf BoardsService
 * @category boardService
 * @param boardData {TBoard} - new board data
 * @return {Promise<{TBoard}| null>}
 */
const postBoard = (boardData) => boardRepo.postBoard(boardData);

/**
 * Send to repository id for search board
 *
 * @memberOf BoardsService
 * @category boardService
 * @param id {string} - id of searching board
 * @return {Promise<{TBoard} | null>}
 */
const getBoardById = (id) => boardRepo.getBoardById(id);

/**
 * Send to repository new data for update board by id
 *
 * @memberOf BoardsService
 * @category boardService
 * @param id {string} - updating board id
 * @param boadrdData {TBoard} - data to update
 * @return {Promise<{TBoard} | null>}
 */
const updateBoard = (id, boadrdData) => boardRepo.updateBoard(id, boadrdData);

/**
 * Send to taskService board id for delete tasks from this board. After that send id to repository for deleting the
 * board
 *
 * @memberOf BoardsService
 * @category boardService
 * @param id {string} - board id
 * @return {Promise<{TBoard}>}
 */
const removeBoard = async (id) => {
  await taskService.removeTasksFromBoard(id)
  return boardRepo.removeBoard(id)
}

module.exports = { getAll, postBoard, getBoardById, updateBoard, removeBoard };
