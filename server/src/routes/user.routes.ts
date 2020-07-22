import { Router } from 'express';
import { deleteUser } from '../controllers/user.contollers';
const router = Router();
import passport from 'passport';

router.delete(
  '/user',
  passport.authenticate('jwt', { session: false }),
  deleteUser
);

export default router;
