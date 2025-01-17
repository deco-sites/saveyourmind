import { createGraphqlClient } from "apps/utils/graphql.ts";

export interface Episode {
  id: string;
  title: string;
  audioFile: { url: string };
  audioDuration: number;
  hosts: { fullName: string }[];
  image: { url: string };
}

export type APIResponse = {
  episodes: Episode[];
};

export default async function loader(): Promise<Episode[] | null> {
  const hygraph = createGraphqlClient({
    endpoint:
      "https://sa-east-1.cdn.hygraph.com/content/clubpz2af000008l67minhv6u/master",
  });

  const query = `query GetEpisodes {
    episodes {
      id
      title
      audioFile {
        url
      }
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

  return data.episodes;
}

export const cache = "stale-while-revalidate";
