import Favorite, { IFavorite } from '../models/favorite';
import { IUser } from '../models/user';

class FavoriteService {
  constructor() {}

  async getAllFavorites(userID: string) {
    const favorites = await Favorite.find().populate({
      path: 'User',
      match: { id: userID },
    });

    return favorites;
  }

  async createFavorite(favoriteData: IFavorite, user: IUser | any) {
    const finalFavorite = {
      gifID: favoriteData,
      user,
    };

    const newFavorite = new Favorite(finalFavorite);
    await newFavorite.save();

    return newFavorite;
  }

  async deleteFavorite(favoriteId: string) {
    const favDeleted = await Favorite.deleteOne({ _id: favoriteId });

    return favDeleted;
  }
}

export default FavoriteService;
