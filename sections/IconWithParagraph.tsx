import Icon, { type AvailableIcons } from "site/components/ui/Icon.tsx";
import AnimatedCircle from "site/components/ui/AnimatedCircle.tsx";

export interface Props {
  text: string;
  icon: {
    source: AvailableIcons;
    width?: number;
    height?: number;
    strokeWidth: number;
  };
}

export default function IconWithParagraph({ text, icon }: Props = {
  text: "Mindfulness for body, mind and spirit",
  icon: {
    source: "User",
    width: 20,
    height: 20,
    strokeWidth: 1,
  },
}) {
  return (
    <div class="lg:container md:max-w-6xl mx-4 relative">
      <div class="flex flex-col items-center justify-center gap-1">
        <Icon
          id={icon.source}
          width={icon.width}
          height={icon.height}
          strokeWidth={icon.strokeWidth}
          class="animate-bounce z-10"
        />

        <div class="absolute left-1/2 -translate-x-1/2 animate-pulse">
          <div class="animate-rotate duration-1000 opacity-50">
            <AnimatedCircle />
          </div>
        </div>

        <h2 class="font-bold leading-tight max-w-lg text-center text-3xl md:text-5xl z-10">
          {text}
        </h2>
      </div>
    </div>
  );
}
