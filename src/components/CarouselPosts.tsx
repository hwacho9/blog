import { getNonFeaturedPosts } from "@/service/posts";
import PostCard from "./PostCard";
import MuiltCarousel from "./MuiltCarousel";

export default async function CarouselPosts() {
    const posts = await getNonFeaturedPosts();
    return (
        <section className="my-4">
            <h2 className="text-2xl font-bold my-2">You May Like</h2>
            <MuiltCarousel>
                {posts.map((post) => (
                    <PostCard key={post.path} post={post} />
                ))}
            </MuiltCarousel>
        </section>
    );
}
