import { Request, Response } from "express";
import { postRepository } from "../infrastructure/posts.repository";

export const deletePost = async (request: Request<{ id: number}>, response: Response) : Promise<any> => {
    try {
        const postToRemove = await postRepository().getPostById(request.params.id);
        if (postToRemove) {
            await postRepository().deletePostById(request.params.id);
            response.json({ data: postToRemove });
        } else {
            response.json({ data: [], message: 'Post not found' });
        }
    } catch (error: any) {
        response.json({ data: [], message: error.message })
    }
}