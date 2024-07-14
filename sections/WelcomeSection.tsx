import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { TUser } from "site/loaders/user/get-by-email.ts";
import { useUser } from "site/hooks/useUser.ts";

export interface Props {
  user?: TUser | null;
  image: ImageWidget;
}

export default function WelcomeSection({ user, image }: Props) {
  if (!user) return null;

  return (
    <section class="w-full max-w-6xl flex items-center justify-between container px-4 xl:px-0 mt-4">
      <div class="flex flex-col">
        <p>Welcome back,</p>
        <p class="text-3xl">{user.name} {user.surname}</p>
      </div>
      <div>
        <Image
          class="object-cover w-14 h-14 rounded-full"
          alt={"Profile Image"}
          src={image}
          width={50}
          height={50}
        />
      </div>
    </section>
  );
}

export const loader = (props: Props, req: Request) => {
  const user = useUser(null, req);

  return {
    ...props,
    user,
  };
};
