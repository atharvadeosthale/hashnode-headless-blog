import { PostMetadata } from "@/lib/types";
import { Card, CardContent, CardHeader } from "./ui/card";

type Props = {
  latest?: boolean;
  post: PostMetadata;
};

export default function BlogCard({ post, latest }: Props) {
  return (
    <Card className={`flex ${latest ? "col-span-3 w-full" : "flex-col"}`}>
      <CardHeader>
        <img
          className="rounded-lg h-full"
          src={post.coverImage.url}
          alt={post.title}
        />
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-bold">{post.title}</h2>
        <div>@{post.author.username}</div>
        <p className="text-gray-500 line-clamp-4">
          {post.subtitle || post.content.text}
        </p>
      </CardContent>
    </Card>
  );
}
