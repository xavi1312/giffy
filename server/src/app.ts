import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';

import config from './config';
import passportMidelware from './middlewares/passport';

import authRoutes from './routes/auth.routes';
import favoriteRoutes from './routes/favorite.routes';

// intialitations
const app = express();

// setings
app.set('port', config.DB.port);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMidelware);

// routes
app.get('/', (req, res) => {
  res.send(`La API está escuchando por el puerto ${app.get('port')}`);
});

app.use(authRoutes);
app.use(favoriteRoutes);

export default app;
