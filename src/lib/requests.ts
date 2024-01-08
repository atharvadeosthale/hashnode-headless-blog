import request, { gql } from "graphql-request";
import { env } from "./env";
import { UserWithUsername } from "./types";

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
