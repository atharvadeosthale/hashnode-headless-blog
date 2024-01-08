import BlogCard from "@/components/blog-card";
import { getPosts } from "@/lib/requests";

export default async function Home() {
  // temp rsc to test cards
  const posts = await getPosts(10, 1);

  return (
    <main className="max-w-7xl w-full mx-auto">
      <BlogCard post={posts.user.posts.nodes[0]} latest />
      <div className="grid grid-cols-3 gap-5 mt-5">
        {posts.user.posts.nodes.slice(1).map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
    </main>
  );
}
