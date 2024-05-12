import { readFile } from "fs/promises";
import path from "path";

export type Post = {
    title: string;
    description: string;
    date: Date;
    category: string;
    path: string;
    featured: boolean;
};

export type PostData = Post & {
    content: string;
    next: Post | null;
    prev: Post | null;
};

export async function getFeaturedPosts(): Promise<Post[]> {
    return getAllPosts() //
        .then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
    return getAllPosts() //
        .then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
    //  set file past
    const filePath = path.join(process.cwd(), "data", "posts.json");
    return readFile(filePath, "utf-8")
        .then<Post[]>((data) => JSON.parse(data))
        .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1))); // sort by date
}

export async function getPostData(fileName: string): Promise<PostData> {
    const filePath = path.join(
        process.cwd(),
        "data",
        "posts",
        `${fileName}.md`
    );
    const posts = await getAllPosts(); //
    const post = posts.find((post) => post.path === fileName);

    if (!post) {
        throw new Error(`Post not found: ${fileName}`);
    }
    const index = posts.indexOf(post);
    const next = index > 0 ? posts[index - 1] : null;
    const prev = index < posts.length - 1 ? posts[index + 1] : null;
    const content = await readFile(filePath, "utf-8");
    return { ...post, content, next, prev };
}
