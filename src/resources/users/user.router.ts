import { Request, Response } from 'express';

const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req: Request, res: Response) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
  console.log(req.headers);
});

router.route('/').post(async (req: Request, res: Response) => {
  const user = await usersService.postUser(req.body);
  res.statusCode = 201;
  res.json(User.toResponse(user));
});

router.route('/:userId').get(async (req: Request, res: Response) => {
  const user = await usersService.getUserById(req.params.userId);
  if (user) {
    res.json(User.toResponse(user));
  } else {
    res.statusCode = 404;
    res.json({ message: 'user not fount' });
  }
});

router.route('/:userId').put(async (req: Request, res: Response) => {
  const user = await usersService.updateUser(req.params.userId, req.body);
  res.json(User.toResponse(user));
});

router.route('/:userId').delete(async (req: Request, res: Response) => {
  const user = await usersService.removeUser(req.params.userId);
  res.json(User.toResponse(user));
});

module.exports = router;
