import express from 'express';
import { deleteStory, edit, see } from '../controllers/storiesController';

const storyRouter = express.Router();

storyRouter.get('/:id', see);
storyRouter.get('/:id/edit', edit);
storyRouter.get('/:id/delete', deleteStory);

export default storyRouter;
