import express, { Request, Response } from 'express';
import { User } from './user.model';
import { usersService } from './user.service';

export const router = express.Router();

router.route('/').get(async (req: Request, res: Response) => {
  const users = await usersService.getAll();
  if (req)
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req: Request, res: Response) => {
  const user = await usersService.postUser(req.body);
  res.statusCode = 201;
  res.json(User.toResponse(user));
});

router.route('/:userId').get(async (req: Request, res: Response) => {
  const user = await usersService.getUserById(req.params['userId']);
  if (user) {
    res.json(User.toResponse(user));
  } else {
    res.statusCode = 404;
    res.json({ message: 'user not found' });
  }
});

router.route('/:userId').put(async (req: Request, res: Response) => {
  const user = await usersService.updateUser(req.params['userId'], req.body);
  if (user) {
    res.json(User.toResponse(user));
  } else {
    res.statusCode = 404
    res.json({message: "user not found"})
  }
});

router.route('/:userId')["delete"](async (req: Request, res: Response) => {
  const user = await usersService.removeUser(req.params['userId']);
  if (user) {
    res.json(User.toResponse(user));
  } else {
    res.statusCode = 404
    res.json({message: "user not found"})
  }
});

