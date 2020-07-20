import { Request, Response } from 'express';
import User, { IUser } from '../models/user';
import jwt from 'jsonwebtoken';
import config from '../config';
import UserService from '../services/user';

const userService = new UserService();
function createToken(user: IUser) {
  return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
    expiresIn: 86400,
  });
}

export const signup = async (req: Request, res: Response) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({ msg: 'Please. Send your email and password.' });
    }

    const user = await userService.getUser(req.body.email);
    if (user) return res.status(400).json({ msg: 'The user already exists' });

    const newUser = await userService.newUser(req.body);

    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({ msg: 'Please. Send your email and password.' });
    }

    const user = await userService.getUser(req.body.email);
    if (!user) return res.status(400).json({ msg: 'The user does not exists' });

    const isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
      return res.status(200).json({ token: createToken(user) });
    }

    return res.status(400).json({ msg: 'The email or password are incorrect' });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};
