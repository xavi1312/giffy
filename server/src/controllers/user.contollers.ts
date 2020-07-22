import { Request, Response } from 'express';
import UserService from '../services/user';

const userService = new UserService();
export const deleteUser = (req: Request, res: Response) => {
  try {
    const id = req.user['id'];
    const userDeleted = userService.deleteUser(id);

    return res.status(200).json(userDeleted);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};
