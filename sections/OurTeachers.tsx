import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Banner {
  image: {
    source: ImageWidget;
    description: string;
    width?: number;
    height?: number;
  };
  name: string;
  biography: string;
}

export interface Props {
  title: string;
  banners: Banner[];
}

export default function OurTeachers(
  { title = "Our Teachers", banners = [] }: Props,
) {
  return (
    <div class="flex flex-col gap-12 my-12 items-center lg:items-start justify-center w-full container max-w-5xl px-2 xl:px-0">
      <h2 class="text-4xl leading-snug font-black text-center text-base-300">
        {title}
      </h2>

      <ul class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {banners.map((banner) => (
          <li class="flex flex-col w-full gap-5">
            <Image
              src={banner.image.source}
              alt={banner.image.description}
              width={banner.image.width || 300}
              height={banner.image.height || 400}
              loading="lazy"
              class="rounded-lg"
            />

            <div class="flex flex-col gap-2">
              <h3 class="text-2xl leading-snug font-black text-base-300">
                {banner.name}
              </h3>

              <p class="text-neutral/50">
                {banner.biography}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
