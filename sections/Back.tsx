import { useScript } from "deco/hooks/useScript.ts";
import Icon from "site/components/ui/Icon.tsx";

export interface Props {
  backTo: string;
}

const script = (id: string) => {
  const handleScroll = () => {
    const elem = document.getElementById(id);

    const scrollY = self.scrollY;

    if (elem && scrollY > 120) {
      elem.classList.remove("-bottom-16");
      elem.classList.add("bottom-6");
    } else {
      elem?.classList.remove("bottom-6");
      elem?.classList.add("-bottom-16");
    }
  };

  addEventListener("scroll", handleScroll);
};

export default function Back({ backTo = "/dashboard" }: Props) {
  return (
    <>
      <div
        id="scrollTransition"
        class="fixed z-20 right-2 -bottom-16 duration-300 transition-all ease-in-out"
      >
        <a
          href={backTo}
          class="flex items-center justify-center w-16 h-16 rounded-full p-2 bg-primary"
        >
          <Icon
            id="ArrowRight"
            size={24}
            strokeWidth={1}
            class="text-base-content"
          />
        </a>
      </div>

      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: useScript(script, "scrollTransition"),
        }}
      />
    </>
  );
}
