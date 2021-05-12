const boards = [];

const getAll = async () => boards;
const postBoard = async (boardData) => {
  boards.push(boardData);
  return boardData;
}
const getBoardById = async (id) => boards.find(board => board.id === id);
const updateBoard = async (id, {title, columns}) => {
  const board = await getBoardById(id);
  const index = boards.indexOf(board);
  boards[index] = {...board, title, columns};
  return boards[index];
}
const removeBoard = async (id) => {
  const board = await getBoardById(id);
  const index = boards.indexOf(board);
  boards.splice(index, 1);
  return board;
}

module.exports = { getAll, postBoard, getBoardById, updateBoard, removeBoard };
