import { Request, Response } from "express";
import { postRepository } from "../infrastructure/posts.repository";

export const getPosts = async (request: Request, response: Response): Promise<any> => {
    try {
        const posts = await postRepository().getPosts();
        response.json({ data: posts });
    } catch (error: any) {
        response.json({ data: [], message: error.message })
    }
}