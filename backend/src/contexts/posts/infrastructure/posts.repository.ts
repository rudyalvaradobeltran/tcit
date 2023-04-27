import { AppDataSource } from "../../../infrastructure/database/config";
import { Post } from "../../../infrastructure/database/entities/post.entity";

const repository = AppDataSource.getRepository(Post);

export const postRepository = () => ({
    async getPosts () : Promise<Post[]> {
        return repository.find();
    },
    async createPost (name: string, description: string) : Promise<Post> {
        const newPost = new Post();
        newPost.name = name;
        newPost.description = description;
        return repository.save(newPost);
    },
    async getPostById (id: number) : Promise<Post> {
        const post = await repository.findOneBy({ id });
        if (post) {
            post.id = id;
        }
        return post;
    },
    async deletePostById (id: number) : Promise<any> {
        await repository.delete({ id });
    }
})