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
  user: {
    posts: {
      nodes: PostMetadata[];
    };
  };
};
