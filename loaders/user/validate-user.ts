import { compare } from "bcrypt";
import { AppContext } from "site/apps/site.ts";

export interface Props {
  email: string;
  password: string;
}

export default async function loader(
  { email, password }: Props,
  _req: Request,
  { invoke }: AppContext,
) {
  const data = await invoke.site.loaders.user["get-by-email"]({ email });

  if (!data || !data.subscriber) {
    throw new Error("User does not exists!");
  }

  const isValid = await compare(password, data.subscriber.password);

  if (!isValid) {
    throw new Error("Wrong credentials. Try again.");
  }

  return {
    id: data.subscriber.slug,
    username: data.subscriber.name,
    surname: data.subscriber.surname,
    email: data.subscriber.email,
  };
}
