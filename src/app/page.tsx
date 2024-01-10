import BlogCard from "@/components/blog-card";
import Posts from "@/components/posts";
import { getPosts } from "@/lib/requests";
import { QueryClient } from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <main className="max-w-7xl w-full mx-auto">
      <div className="grid grid-cols-3 gap-5 mt-5">
        <Posts />
      </div>
    </main>
  );
}
