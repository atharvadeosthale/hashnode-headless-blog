import request, { gql } from "graphql-request";
import { env } from "./env";
import { GetPostsResponse, UserWithUsername } from "./types";

const endpoint = env.NEXT_PUBLIC_HASHNODE_ENDPOINT;
const username = env.NEXT_PUBLIC_HASHNODE_USERNAME;

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

export async function getPosts(pageSize: number, pageNumber: number) {
  const query = gql`
    query {
      user(username: "${username}") {
        posts(pageSize: ${pageSize}, page: ${pageNumber}) {
          nodes {
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
        }
      }
    }
  `;

  const response = await request<GetPostsResponse>(endpoint, query);

  return response;
}
