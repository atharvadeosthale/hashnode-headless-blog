"use client";

import { getPostBySlug } from "@/lib/requests";
import { useQuery } from "@tanstack/react-query";

type Props = {
  slug: string;
};

export default function Post({ slug }: Props) {
  const { data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => getPostBySlug(slug),
  });

  return (
    <div>
      <img src={data?.coverImage.url} alt="" className="w-full" />
      <h1 className="text-6xl text-center leading-normal font-bold mt-5">
        {data?.title}
      </h1>
      <p className="my-3">{data?.subtitle}</p>
      <div
        className="blog-content text-xl leading-loose flex flex-col gap-5 mt-5"
        dangerouslySetInnerHTML={{ __html: data!.content.html }}
      ></div>
    </div>
  );
}
