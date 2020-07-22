import { Router } from 'express';
const router = Router();
import passport from 'passport';
import {
  getFavorites,
  createFavorite,
  deleteFavorite,
} from '../controllers/favorite.controller';

router
  .get(
    '/favorites',
    passport.authenticate('jwt', { session: false }),
    getFavorites
  )
  .post(
    '/favorites',
    passport.authenticate('jwt', { session: false }),
    createFavorite
  )
  .delete(
    '/favorites',
    passport.authenticate('jwt', { session: false }),
    deleteFavorite
  );

export default router;
