import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  name: string;
  image: ImageWidget;
}

export default function WelcomeSection({ name, image }: Props) {
  return (
    <section class="w-full max-w-6xl flex items-center justify-between container">
      <div class="flex flex-col">
        <p>Welcome back,</p>
        <p class="text-3xl">Areetha Zoya</p>
      </div>
      <div>
        <Image
          class="object-cover w-14 h-14 rounded-full"
          alt={name}
          src={image}
          width={50}
          height={50}
        />
      </div>
    </section>
  );
}
