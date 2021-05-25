import express, { Request, Response } from 'express';
import { boardService } from './board.service';

export const router = express.Router();

router.route('/').get(async (req: Request, res: Response) => {
  const boards = await boardService.getAll();
  if (req)
  res.json(boards);
});

router.route('/').post(async (req: Request, res: Response) => {
  const board = await boardService.postBoard(req.body);
  res.statusCode = 201;
  res.json(board);
});

router.route('/:boardId').get(async (req: Request, res: Response) => {
  const board = await boardService.getBoardById(req.params['boardId']);
  if (board) {
    res.statusCode = 200;
    res.json(board);
  } else {
    res.statusCode = 404;
    res.json('Board not found');
  }
});

router.route('/:boardId').put(async (req: Request, res: Response) => {
  const board = await boardService.updateBoard(req.params['boardId'], req.body);
  if (board) {
    res.statusCode = 200;
    res.json(board);
  } else {
    res.statusCode = 404;
    res.json('Board not found');
  }
});

router.route('/:boardId')["delete"](async (req: Request, res: Response) => {
  const board = await boardService.removeBoard(req.params['boardId']);
  res.json(board);
});
