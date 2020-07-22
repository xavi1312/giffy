import { model, Schema, Document } from 'mongoose';
import { userSchema, IUser } from './user';

export interface IFavorite extends Document {
  gifID: string;
  user: IUser;
}

const favoriteSchema = new Schema({
  gifID: {
    required: true,
    type: 'string',
    unique: true,
  },
  user: userSchema,
});

export default model<IFavorite>('Favorite', favoriteSchema);
