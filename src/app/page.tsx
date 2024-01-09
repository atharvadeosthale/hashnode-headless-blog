import BlogCard from "@/components/blog-card";
import NewsletterCard from "@/components/newsletter-card";
import { getPosts } from "@/lib/requests";

export default async function Home() {
  // temp rsc to test cards
  const posts = await getPosts(10, 1);

  return (
    <main className="max-w-7xl w-full mx-auto">
      <NewsletterCard />

      <div className="grid grid-cols-3 gap-5 mt-5">
        {posts.user.posts.nodes.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
    </main>
  );
}
