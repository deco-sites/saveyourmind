import { createGraphqlClient } from "apps/utils/graphql.ts";

export interface Props {
  email: string;
}

export default async function loader({ email }: Props) {
  const hygraph = createGraphqlClient({
    endpoint:
      "https://sa-east-1.cdn.hygraph.com/content/clubpz2af000008l67minhv6u/master",
  });

  const query = `query GetSubscriberByEmail($email: String!) {
    subscriber(where: {email: $email}) {
      email
    }
  }`;

  const data = await hygraph.query({ query, variables: { email } });

  return data;
}
