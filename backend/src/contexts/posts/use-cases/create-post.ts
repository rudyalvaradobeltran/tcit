import { Request, Response } from 'express';
import { postRepository } from "../infrastructure/posts.repository";

interface IBody {
    name: string;
    description: string;
}

export const createPost = async (request: Request<any, Response, IBody>, response: Response): Promise<any> => {
    try {
        const { name, description } = request.body;
        const post = await postRepository().createPost(name, description);
        response.json({ data: post });
    } catch (error: any) {
        response.json({ data: [], message: error.message })
    }
}