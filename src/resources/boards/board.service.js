const boardRepo = require('./board.memory.repository');
const taskService = require("../tasks/task.service");

const getAll = () => boardRepo.getAll();
const postBoard = (boardData) => boardRepo.postBoard(boardData);
const getBoardById = (id) => boardRepo.getBoardById(id);
const updateBoard = (id, boadrdData) => boardRepo.updateBoard(id, boadrdData);
const removeBoard = async (id) => {
  await taskService.removeTasksFromBoard(id)
  return boardRepo.removeBoard(id)
}

module.exports = { getAll, postBoard, getBoardById, updateBoard, removeBoard };
