import Slider from "site/components/ui/Slider.tsx";
import Icon from "site/components/ui/Icon.tsx";
import { Episode } from "site/loaders/podcast/get-episodes.ts";
import Image from "apps/website/components/Image.tsx";

import "preact";

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "media-controller": unknown;
      "media-control-bar": unknown;
      "media-seek-backward-button": unknown;
      "media-seek-forward-button": unknown;
      "media-play-button": unknown;
      "media-time-display": unknown;
      "media-time-range": unknown;
      "media-duration-display": unknown;
      "media-mute-button": unknown;
    }
  }
}

export interface Props {
  title: string;
  episodes: Episode[] | null;
  id: string;
  interval?: number;
  arrows?: boolean;
}

function Buttons() {
  return (
    <div class="flex gap-4">
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton class="flex items-center justify-center btn-circle border border-base-content">
          <Icon
            class="text-base-content"
            size={24}
            id="ArrowRight"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2">
        <Slider.NextButton class="flex items-center justify-center btn-circle border border-base-content">
          <Icon
            class="text-base-content"
            size={24}
            id="ArrowLeft"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </div>
  );
}

function SliderItem(
  { slide, id }: { slide: Episode; id: string },
) {
  const content = slide;

  return (
    <div
      id={id}
      class="relative overflow-y-hidden w-full h-full"
    >
      <div class="flex flex-col justify-center gap-4 rounded-lg h-full w-full bg-neutral p-2">
        <Image
          src={content.image.url || ""}
          alt={content.title}
          width={320}
          height={256}
          class="object-cover h-64 rounded-lg"
        />

        <div class="flex flex-col justify-between gap-2.5 h-full">
          <div class="flex flex-col gap-2.5">
            <span class="font-bold text-base">{content.title}</span>

            <p class="font-normal text-base">
              by {content.hosts[0].fullName} • {content.audioDuration}m
            </p>
          </div>

          <media-controller audio>
            <audio
              slot="media"
              src={content.audioFile.url}
            />
            <media-control-bar>
              <media-seek-backward-button></media-seek-backward-button>
              <media-play-button></media-play-button>
              <media-seek-forward-button></media-seek-forward-button>
              <media-time-display></media-time-display>
              <media-time-range></media-time-range>
              <media-duration-display></media-duration-display>
              <media-mute-button></media-mute-button>
            </media-control-bar>
          </media-controller>
        </div>
      </div>
    </div>
  );
}

export default function Episodes(
  {
    id = "episodes",
    title = "Featured Activities",
    episodes = [],
    interval,
    arrows,
  }: Props,
) {
  if (!episodes || episodes.length === 0) return null;

  return (
    <>
      <div class="flex flex-col gap-12 lg:container md:max-w-6xl lg:mx-auto px-4 xl:px-0 text-sm py-10">
        <h2 class="text-4xl leading-snug font-black text-base-content">
          {title}
        </h2>

        <Slider
          class="carousel carousel-center w-full col-span-full row-span-full gap-6"
          rootId={id}
          interval={interval && interval * 1e3}
          infinite
          scroll="smooth"
        >
          {episodes?.map((episode, index) => (
            <Slider.Item
              index={index}
              class="carousel-item max-w-80 w-full"
            >
              <SliderItem
                slide={episode}
                id={`${id}::${index}`}
              />
            </Slider.Item>
          ))}
        </Slider>

        <div class="flex items-center justify-end w-full">
          {arrows && <Buttons />}
        </div>
      </div>

      <script
        type="module"
        src="https://cdn.jsdelivr.net/npm/media-chrome@3/+esm"
      />
    </>
  );
}
