import express from 'express';
import { getPosts } from '../use-cases/get-posts';
import { createPost } from '../use-cases/create-post';
import { deletePost } from '../use-cases/delete-post';

const routes = express.Router();

routes.get('/', getPosts);
routes.put('/', createPost);
routes.delete('/:id', deletePost);

export default routes;
