import { getFeaturedPosts } from "@/service/posts";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
    // read post data
    const posts = await getFeaturedPosts();
    return (
        <section>
            <h2>Featured Posts</h2>
            <PostsGrid posts={posts} />
        </section>
    );
}
