import { createGraphqlClient } from "apps/utils/graphql.ts";

export interface Episode {
  id: string;
  title: string;
  audioDuration: number;
  hosts: { fullName: string }[];
  image: { url: string };
}

export type APIResponse = {
  episodes: Episode[];
};

export default async function loader(): Promise<APIResponse | null> {
  const hygraph = createGraphqlClient({
    endpoint:
      "https://sa-east-1.cdn.hygraph.com/content/clubpz2af000008l67minhv6u/master",
  });

  const query = `query GetEpisodes {
    episodes {
      id
      title
      audioDuration
      hosts {
        fullName
      }
      image {
        url
      }
    }
  }`;

  const data = await hygraph.query({
    query,
  }) as APIResponse;

  return data;
}

export const cache = "stale-while-revalidate";
