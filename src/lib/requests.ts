import request, { gql } from "graphql-request";
import { env } from "./env";
import {
  GetPostsArgs,
  GetPostsResponse,
  SubscribeToNewsletterResponse,
  PublicationName,
} from "./types";

const endpoint = env.NEXT_PUBLIC_HASHNODE_ENDPOINT;
const publicationId = env.NEXT_PUBLIC_HASHNODE_PUBLICATION_ID;

export async function getBlogName() {
  const query = gql`
    query {
      publication(id: "${publicationId}") {
        title
        displayTitle
      }
    }
  `;

  const response = await request<PublicationName>(endpoint, query);

  return {
    title: response.publication.title,
    displayTitle: response.publication.displayTitle,
  };
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
