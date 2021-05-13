const { v4: uuidv4 } = require('uuid');
const boardRepo = require('./board.memory.repository');
const taskService = require("../tasks/task.service");
const Board = require('./board.model');

const getAll = () => boardRepo.getAll();
const postBoard = ({title, columns }) => {
  const boardData = new Board({title, columns, id: uuidv4()})
  return boardRepo.postBoard(boardData);
}
const getBoardById = (id) => boardRepo.getBoardById(id);
const updateBoard = (id, boadrdData) => boardRepo.updateBoard(id, boadrdData);
const removeBoard = async (id) => {
  await taskService.removeTasksFromBoard(id)
  return boardRepo.removeBoard(id)
}

module.exports = { getAll, postBoard, getBoardById, updateBoard, removeBoard };
