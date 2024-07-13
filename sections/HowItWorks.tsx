import type { ImageWidget, RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Content {
  image: {
    source: ImageWidget;
    description: string;
    width?: number;
    height?: number;
  };
  title: string;
  subtitle: RichText;
}

export interface Props {
  title: string;
  contents: Content[];
}

export default function HowItWorks(
  { title = "How it works", contents = [] }: Props,
) {
  return (
    <div class="flex flex-col gap-12 mt-8 mb-12 items-center justify-center w-full container max-w-5xl px-2 xl:px-0">
      <h2 class="text-4xl leading-snug font-black text-center text-base-300">
        {title}
      </h2>

      <ul class="flex flex-col md:flex-row gap-3 items-center justify-center md:justify-between w-full">
        {contents.map((content) => (
          <li class="flex flex-col gap-4 items-center justify-center w-full md:w-1/3">
            <Image
              src={content.image.source}
              alt={content.image.description}
              width={content.image.width || 120}
              height={content.image.height || 120}
              loading="lazy"
            />

            <div class="flex flex-col space-y-2 items-center justify-center w-full">
              <h3 class="text-2xl leading-snug font-black text-center text-base-300">
                {content.title}
              </h3>

              <div
                class="text-neutral/50"
                dangerouslySetInnerHTML={{ __html: content.subtitle }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
