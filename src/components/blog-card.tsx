import { PostMetadata } from "@/lib/types";
import { Card, CardContent, CardHeader } from "./ui/card";
import Link from "next/link";

type Props = {
  post: PostMetadata;
};

export default function BlogCard({ post }: Props) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <img
          className="rounded-lg h-full"
          src={post.coverImage.url}
          alt={post.title}
        />
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-bold">
          <Link href={`/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        <div className="mt-3 flex gap-3 items-center">
          {post?.author.profilePicture && (
            <img
              src={post.author.profilePicture}
              className="h-7 w-7 rounded-full"
            />
          )}{" "}
          {post.author.name}
        </div>
        <p className="text-gray-500 line-clamp-4 mt-3">
          {post.subtitle || post.content.text}
        </p>
      </CardContent>
    </Card>
  );
}
