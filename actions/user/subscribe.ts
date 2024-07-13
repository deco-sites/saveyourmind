import { createGraphqlClient } from "apps/utils/graphql.ts";
import { AppContext } from "site/apps/site.ts";

export interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
  slug: string;
  birthDate: string;
}

export default async function action(
  { user }: { user: User },
  _req: Request,
  _ctx: AppContext,
) {
  const hygraph = createGraphqlClient({
    endpoint:
      "https://sa-east-1.cdn.hygraph.com/content/clubpz2af000008l67minhv6u/master",
  });

  const query = `
    mutation createSubscriber($user: SubscriberCreateInput!) {
      createSubscriber(data: $user) {
        id
        name
        surname
        email
      }
    }
  `;

  const data = await hygraph.query({ query, variables: { user } });

  return data;
}
