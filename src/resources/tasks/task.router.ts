import { Request, Response } from 'express';

const router = require('express').Router();
const taskService = require('./task.service');

router.route('/:boardId/tasks').get(async (req: Request, res: Response) => {
  const tasks = await taskService.getAll();
  res.json(tasks);
  console.log(req.headers);
});

router
  .route('/:boardId/tasks/:taskId')
  .get(async (req: Request, res: Response) => {
    const task = await taskService.getTaskById(req.params.taskId);
    if (task) {
      res.statusCode = 200;
      res.json(task);
    } else {
      res.statusCode = 404;
      res.json('Task not found');
    }
  });

router.route('/:boardId/tasks/').post(async (req: Request, res: Response) => {
  const task = await taskService.postTask(req.body, req.params.boardId);
  if (task) {
    res.statusCode = 201;
    res.json(task);
  } else {
    res.statusCode = 404;
    res.json('Task not found');
  }
});

router
  .route('/:boardId/tasks/:taskId')
  .put(async (req: Request, res: Response) => {
    const task = await taskService.updateTask(req.body, req.params.taskId);
    if (task) {
      res.statusCode = 200;
      res.json(task);
    } else {
      res.statusCode = 404;
      res.json('Task not found');
    }
  });

router
  .route('/:boardId/tasks/:taskId')
  .delete(async (req: Request, res: Response) => {
    const task = await taskService.removeTask(req.params.taskId);
    if (task) {
      res.statusCode = 200;
      res.json(task);
    } else {
      res.statusCode = 404;
      res.json('Task not found');
    }
  });

module.exports = router;
