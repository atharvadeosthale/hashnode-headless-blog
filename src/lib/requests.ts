import request, { gql } from "graphql-request";
import { env } from "./env";
import {
  GetPostsArgs,
  GetPostsResponse,
  SubscribeToNewsletterResponse,
  UserWithUsername,
} from "./types";

const endpoint = env.NEXT_PUBLIC_HASHNODE_ENDPOINT;
const username = env.NEXT_PUBLIC_HASHNODE_USERNAME;
const publicationId = env.NEXT_PUBLIC_HASHNODE_PUBLICATION_ID;

export async function getBlogName() {
  const query = gql`
    query {
      user(username: "${username}") {
        username
      }
    }
  `;

  const response = await request<UserWithUsername>(endpoint, query);

  return response.user.username;
}

export async function getPosts({ first = 12, pageParam = "" }: GetPostsArgs) {
  const query = gql`
    query {
      publication(id: "${publicationId}") {
        posts(first: ${first}, after: "${pageParam}") {
          edges {
            node {
              id
              title
              subtitle
              content {
                text
              }
              coverImage {
                url
              }
              author {
                name
                username
                profilePicture
              }
            }
            cursor
          }
          totalDocuments
        }
      }
    }
  `;

  const response = await request<GetPostsResponse>(endpoint, query);

  return response.publication.posts.edges;
}

export async function subscribeToNewsletter(email: string) {
  const mutation = gql`
    mutation {
      subscribeToNewsletter(
        input: {
          email: "${email}"
          publicationId: "${publicationId}"
        }
      ) {
        status
      }
    }
  `;

  const response = await request<SubscribeToNewsletterResponse>(
    endpoint,
    mutation
  );

  return response;
}
