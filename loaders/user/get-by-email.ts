import { createGraphqlClient } from "apps/utils/graphql.ts";
import type { User } from "site/actions/user/subscribe.ts";

export interface Props {
  email: string;
}

export type TUser = User & { slug: string; password: string };

export type APIResponse = {
  subscriber: TUser | null;
};

export default async function loader({ email }: Props): Promise<APIResponse> {
  const hygraph = createGraphqlClient({
    endpoint:
      "https://sa-east-1.cdn.hygraph.com/content/clubpz2af000008l67minhv6u/master",
  });

  const query = `query GetSubscriberByEmail($email: String!) {
    subscriber(where: {email: $email}) {
      email
    }
  }`;

  const data = await hygraph.query({
    query,
    variables: { email },
  }) as APIResponse;

  return data;
}
