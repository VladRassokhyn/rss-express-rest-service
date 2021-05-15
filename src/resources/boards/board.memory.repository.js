const { v4: uuidv4 } = require('uuid');
const Board = require('./board.model');

const boards = [];

const getAll = async () => boards;
const postBoard = async (boardData) => {
  boards.push(new Board({...boardData, id: uuidv4()}));
  return boards[boards.length - 1];
}
const getBoardById = async (id) => boards.find(board => board.id === id);
const updateBoard = async (id, boardData) => {
  const board = await getBoardById(id);
  const index = boards.indexOf(board);
  boards[index] = {...board, ...boardData};
  return boards[index];
}
const removeBoard = async (id) => {
  const board = await getBoardById(id);
  const index = boards.indexOf(board);
  boards.splice(index, 1);
  return board;
}

module.exports = { getAll, postBoard, getBoardById, updateBoard, removeBoard };
