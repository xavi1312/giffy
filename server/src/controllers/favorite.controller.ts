import { Response, Request } from 'express';
import FavoriteService from '../services/favorite';

const favoriteService = new FavoriteService();
const getFavorites = async (req: Request, res: Response) => {
  try {
    const userID = req.user['id'];
    const favorites = await favoriteService.getAllFavorites(userID);
    return res.status(200).json(favorites);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};
const createFavorite = async (req: Request, res: Response) => {
  try {
    if (!req.body.gifID)
      return res.status(400).json({ msg: 'Gif id is necessary' });

    const newFavorite = await favoriteService.createFavorite(
      req.body.gifID,
      req.user
    );

    return res.status(200).json(newFavorite);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};
const deleteFavorite = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body;

    const favDeleted = favoriteService.deleteFavorite(_id);

    return res.status(200).json(favDeleted);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};

export { getFavorites, createFavorite, deleteFavorite };
