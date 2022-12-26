import express from 'express';
import { home, trending, update } from '../controllers/storiesController';
import { join, login } from '../controllers/userController';

const globalRouter = express.Router();

globalRouter.get('/', home);
globalRouter.get('/trending', trending);
globalRouter.get('/new', update);
globalRouter.get('/join', join);
globalRouter.get('/login', login);

export default globalRouter;
