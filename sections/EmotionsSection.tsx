import Image from "apps/website/components/Image.tsx";

export default function EmotionsSection() {
  return (
    <section class="w-full bg-[#656fdf] flex items-center justify-center pt-4 pb-3.5 mt-6 mb-4">
      <div class="flex flex-col items-center justify-center container w-full max-w-6xl">
        <div class="flex items-center justify-center">
          <p class="text-xl md:text-3xl font-bold">
            How are you feeling today?
          </p>
        </div>
        <div class="flex items-center justify-center py-4 gap-4 md:gap-10">
          <button>
            <Image
              class="object-cover w-14 h-14 rounded-full"
              src="https://i.pinimg.com/originals/d4/58/9e/d4589ee6e7aeb5c072befb4008126916.png"
              alt="Angry"
              width={56}
              height={56}
              loading="eager"
            />
            <p class="pt-2">Angry</p>
          </button>
          <button>
            <Image
              class="object-cover w-14 h-14 rounded-full"
              src="https://w7.pngwing.com/pngs/866/54/png-transparent-emoji-sadness-emoticon-smiley-sad-emoji-crying-imoji-face-sticker-desktop-wallpaper-thumbnail.png"
              alt="Sad"
              width={50}
              height={50}
              loading="eager"
            />
            <p class="pt-2">Sad</p>
          </button>
          <button>
            <Image
              class="object-cover w-14 h-14 rounded-full"
              src="https://marketplacedesignoye.s3.ap-south-1.amazonaws.com/smiley_neutral_face-color-emoticon-icon-logo-vector.png"
              alt="Neutral"
              width={50}
              height={50}
              loading="eager"
            />
            <p class="pt-2">Neutral</p>
          </button>
          <button>
            <Image
              class="object-cover w-14 h-14 rounded-full"
              src="https://images.vexels.com/content/134789/preview/happy-smile-emoji-emoticon-icon-c8c1f7.png"
              alt="Good"
              width={50}
              height={50}
              loading="eager"
            />
            <p class="pt-2">Good</p>
          </button>
          <button>
            <Image
              class="object-cover w-14 h-14 rounded-full"
              src="https://w7.pngwing.com/pngs/118/687/png-transparent-smiley-emoticon-emoji-happiness-emoticon-smiley-emoji-love-computer-icons-text-messaging.png"
              alt="Happy"
              width={50}
              height={50}
              loading="eager"
            />
            <p class="pt-2">Happy</p>
          </button>
        </div>
      </div>
    </section>
  );
}
