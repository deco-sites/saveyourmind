import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { asset } from "$fresh/runtime.ts";

export interface CTA {
  id?: string;
  href: string;
  text: string;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  description?: string;
  image?: {
    source: ImageWidget;
    width?: number;
    height?: number;
    description?: string;
    preload?: boolean;
  };
  cta?: CTA;
}

export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  description,
  image,
  cta,
}: Props) {
  return (
    <nav class="flex items-center justify-center w-full">
      <div class="flex flex-col items-center gap-8 w-full">
        <div
          class={`flex w-full py-20 mx-5 md:mx-10 z-10 ${
            image
              ? "flex-col text-left"
              : "flex-col items-center justify-center text-center"
          } gap-12 items-center`}
        >
          <div
            class={`flex flex-col items-center mx-6 lg:container lg:mx-auto lg:w-full space-y-4 gap-4 ${
              image
                ? "w-full lg:max-w-3xl"
                : "flex flex-col items-center justify-center lg:max-w-3xl"
            }`}
          >
            <div
              class="inline-block lg:text-[80px] text-4xl leading-none font-medium"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            >
            </div>
            <p class="text-lg md:text-md leading-[150%]">
              {description}
            </p>
            <div class="flex items-center gap-3">
              {cta && (
                <a
                  key={cta?.id}
                  id={cta?.id}
                  href={cta?.href}
                  class="flex items-center justify-center bg-primary text-neutral w-40 px-6 py-3.5 mx-auto font-bold text-base rounded-full"
                >
                  {cta?.text}
                </a>
              )}
            </div>
          </div>

          <div class="flex items-center justify-center w-full relative overflow-x-hidden">
            <image
              src={asset("/cloud_2.png")}
              width={320}
              height={160}
              alt="Animated Cloud"
              class="absolute top-0 animated_cloud"
            />
            <image
              src={asset("/cloud_1.png")}
              width={320}
              height={160}
              alt="Second Animated Cloud"
              class="absolute right-0 bottom-1/2 animated_cloud"
            />
            <image
              src={asset("/cloud_2.png")}
              width={320}
              height={160}
              alt="Third Animated Cloud"
              class="absolute left-0 bottom-0 animated_cloud-2"
            />

            {image && (
              <Image
                width={image.width || 640}
                height={image.height || 320}
                class="w-full lg:w-1/2 object-fit z-10"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={image.source}
                alt={image.description}
                fetchPriority={image.preload ? "high" : "low"}
                loading={image.preload ? "eager" : "lazy"}
                preload={image.preload}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
