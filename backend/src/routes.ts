import express from 'express';
import postRoutes from './contexts/posts/infrastructure/posts.routes';

const routes = express.Router();

routes.use(express.json());

routes.use('/posts', postRoutes);

export default routes;