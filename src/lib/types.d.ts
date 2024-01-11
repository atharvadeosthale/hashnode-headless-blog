import type { QueryFunctionContext } from "@tanstack/react-query";

export type UserWithUsername = {
  user: {
    username: string;
  };
};

export type PostMetadata = {
  title: string;
  subtitle?: string;
  content: {
    text: string;
  };
  coverImage: {
    url: string;
  };
  author: {
    name: string;
    username: string;
    profilePicture: string;
  };
};

type GetPostsResponse = {
  publication: {
    posts: {
      edges: {
        node: PostMetadata;
        cursor: string;
      }[];
      totalDocuments: number;
    };
  };
};

type GetPostsFunctionArgs = {
  first: number;
  after: string;
};

export type GetPostsArgs = QueryFunctionContext & GetPostsArgs;
