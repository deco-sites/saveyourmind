import { getCookies } from "std/http/cookie.ts";
import { decode } from "djwt";
import { TUser } from "site/loaders/user/get-by-email.ts";

export function useUser(_props: unknown, req: Request): TUser | null {
  const cookies = getCookies(req.headers);
  const jwt = cookies["SaveYourMindAutCookie"];

  if (jwt) {
    const [_header, payload, _signature] = decode<{ subscriber: TUser }>(jwt);

    return payload.subscriber;
  }

  return null;
}
