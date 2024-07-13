import type { CTA } from "site/sections/Hero.tsx";
import { asset } from "$fresh/runtime.ts";

export interface Props {
  title: string;
  cta?: CTA;
}

export default function LargestHeading({ title, cta }: Props) {
  return (
    <div class="flex items-center justify-center px-4 py-20 lg:py-48 relative">
      <image
        src={asset("/cloud_2.png")}
        width={320}
        height={160}
        alt="Animated Cloud"
        loading="lazy"
        class="absolute top-0 animated_cloud"
      />
      <image
        src={asset("/cloud_2.png")}
        width={320}
        height={160}
        alt="Third Animated Cloud"
        loading="lazy"
        class="absolute left-0 bottom-0 animated_cloud-2"
      />

      <div class="flex flex-col gap-12 items-center justify-center container max-w-2xl">
        <h2 class="text-6xl lg:text-8xl leading-snug lg:leading-loose font-bold text-center text-base-content z-20">
          {title}
        </h2>

        {cta && (
          <a
            key={cta?.id}
            id={cta?.id}
            href={cta?.href}
            class="flex items-center justify-center bg-primary text-neutral w-40 px-6 py-3.5 mx-auto font-bold text-base rounded-full z-20"
          >
            {cta?.text}
          </a>
        )}
      </div>
    </div>
  );
}
