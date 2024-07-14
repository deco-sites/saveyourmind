import { verifyPassword } from "site/sdk/usePassword.ts";
import { create } from "djwt";
import { setCookie } from "std/http/cookie.ts";
import { AppContext } from "site/apps/site.ts";

export interface Props {
  email: string;
  password: string;
}

export type APIResponse = {
  slug: string;
  username: string;
  surname: string;
  email: string;
};

export type Status = {
  message: string;
  code: "200" | "401" | "404";
};

export default async function loader(
  { email, password }: Props,
  _req: Request,
  ctx: AppContext,
): Promise<APIResponse | null> {
  const data = await ctx.invoke.site.loaders.user["get-by-email"]({ email });

  if (!data || !data.subscriber) {
    return null;
  }

  const isValid = await verifyPassword(data.subscriber.password, password);

  if (!isValid) {
    return null;
  }

  const key = await crypto.subtle.generateKey(
    { name: "HMAC", hash: "SHA-512" },
    true,
    ["sign", "verify"],
  );

  const expiresInTwoDays = 60 * 60 * 24 * 2;

  const jwt = await create({ alg: "HS512", typ: "JWT" }, {
    subscriber: data.subscriber,
    exp: expiresInTwoDays,
  }, key);

  setCookie(ctx.response.headers, {
    name: "SaveYourMindAutCookie",
    value: jwt,
    path: "/",
    maxAge: expiresInTwoDays,
    sameSite: "Strict",
    httpOnly: true,
  });

  return {
    slug: data.subscriber.slug,
    username: data.subscriber.name,
    surname: data.subscriber.surname,
    email: data.subscriber.email,
  };
}
