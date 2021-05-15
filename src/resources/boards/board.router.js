const router = require('express').Router();
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.json(boards);
});

router.route('/').post(async (req, res) => {
  const board = await boardService.postBoard(req.body);
  res.statusCode = 201;
  res.json(board);
});

router.route('/:boardId').get(async (req, res) => {
  const board = await boardService.getBoardById(req.params.boardId);
  if (board) {
    res.statusCode = 200;
    res.json(board);
  } else {
    res.statusCode = 404;
    res.json('Board not found');
  }
});

router.route('/:boardId').put(async (req, res) => {
  const board = await boardService.updateBoard(req.params.boardId, req.body);
  if (board) {
    res.statusCode = 200;
    res.json(board);
  } else {
    res.statusCode = 404;
    res.json('Board not found');
  }
});

router.route('/:boardId').delete(async (req, res) => {
  const board = await boardService.removeBoard(req.params.boardId);
  res.json(board);
});

module.exports = router;
