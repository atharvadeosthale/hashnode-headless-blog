import NewsletterCard from "@/components/newsletter-card";
import Posts from "@/components/posts";
import { getPosts } from "@/lib/requests";
import { PostMetadata } from "@/lib/types";
import { QueryClient } from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    getNextPageParam: (
      lastPage: {
        node: PostMetadata;
        cursor: string;
      }[]
    ) =>
      lastPage.length < 12 ? undefined : lastPage[lastPage.length - 1].cursor,
    initialPageParam: "",
  });

  return (
    <main className="max-w-7xl w-full mx-auto">
      <div className="grid grid-cols-3 gap-5 mt-5">
        <Posts />
        <NewsletterCard />
      </div>
    </main>
  );
}
