import type { Color, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  style?: "Outline" | "Ghost";
}

export interface Tagline {
  text: string;
  backgroundColor: Color;
  textColor: Color;
}

export interface Props {
  title?: string;
  /** @format textarea */
  description?: string;
  tagline?: Tagline;
  image?: {
    source: ImageWidget;
    description: string;
    width?: number;
    height?: number;
    highPriority?: boolean;
  };
  placement?: "left" | "right";
  cta?: CTA[];
  disableSpacing?: {
    top?: boolean;
    bottom?: boolean;
  };
}

const PLACEMENT = {
  left: "flex-col md:flex-row-reverse",
  right: "flex-col md:flex-row",
};

export default function ImageWithParagraph({
  title = "Here's an intermediate size heading you can edit",
  description =
    "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  tagline,
  image,
  placement = "left",
  disableSpacing,
  cta,
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm">
      <div
        class={`flex ${
          PLACEMENT[placement]
        } gap-12 md:gap-20 text-left items-center z-10 ${
          disableSpacing?.top ? "" : "pt-12 lg:pt-28"
        } ${disableSpacing?.bottom ? "" : "pb-12 lg:pb-28"}`}
      >
        {image && (
          <div class="w-full md:w-1/2 rounded-lg overflow-hidden">
            <Image
              width={image.width || 640}
              height={image.height || 640}
              class="object-fit z-10"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={image.source}
              alt={image.description}
              decoding="async"
              loading={image.highPriority ? "eager" : "lazy"}
              preload={image.highPriority}
            />
          </div>
        )}

        <div class="w-full md:w-1/2 space-y-2 md:space-y-4 md:max-w-xl gap-4 z-10">
          <div class="flex items-center gap-2.5">
            <p class="text-3xl font-bold leading-snug">
              {title}
            </p>

            {tagline && (
              <p
                style={{
                  color: tagline.textColor,
                  backgroundColor: tagline.backgroundColor,
                }}
                class="text-xs font-normal px-3 py-1 rounded-xl"
              >
                {tagline.text}
              </p>
            )}
          </div>

          <p class="leading-relaxed font-normal text-lg">
            {description}
          </p>

          <div class="flex gap-3 pt-4">
            {cta?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href}
                target={item?.href.includes("http") ? "_blank" : "_self"}
                class={`font-normal btn btn-primary
                  ${!item.style || item.style == "Outline" && "btn-outline"}
                  ${item.style == "Ghost" && "btn-ghost"}
                `}
              >
                {item?.text}
                {item.style == "Ghost" && (
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.70697 16.9767L15.414 11.2697L9.70697 5.56274L8.29297 6.97674L12.586 11.2697L8.29297 15.5627L9.70697 16.9767Z"
                      fill="#18181B"
                    />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
