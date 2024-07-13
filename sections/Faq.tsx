import type { RichText } from "apps/admin/widgets.ts";
import Icon from "site/components/ui/Icon.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Question {
  title: string;
  answer: RichText;
}

export interface Props {
  title?: string;
  description?: string;
  cta?: CTA;
  questions?: Question[];
}

export default function BlogPosts({
  title = "Looking for an answer?",
  description,
  cta,
  questions = [
    {
      title: "Question #1 text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
    },
    {
      title: "Question #2 text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
    },
    {
      title: "Question #3 text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
    },
    {
      title: "Question #4 text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
    },
    {
      title: "Question #5 text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
    },
  ],
}: Props) {
  return (
    <div class="md:container md:max-w-5xl text-sm my-12 p-12 bg-secondary text-neutral rounded-3xl w-full">
      <div class="flex flex-col items-center justify-center gap-10 w-full">
        <div class="flex-none space-y-6">
          {title && (
            <p class="text-4xl leading-snug font-black text-center">
              {title}
            </p>
          )}

          {description && (
            <p class="text-lg">
              {description}
            </p>
          )}

          {cta && (
            <a
              key={cta.id}
              id={cta.id}
              href={cta.href}
              target={cta.href.includes("http") ? "_blank" : "_self"}
              class={`font-normal btn btn-primary ${
                cta.outline && "btn-outline"
              }`}
            >
              {cta.text}
            </a>
          )}
        </div>

        <div class="flex-auto w-full">
          {questions?.map((question) => (
            <details class="border-secondary-content border-b group">
              <summary class="text-lg cursor-pointer py-6 flex">
                <span class="font-bold flex-auto">{question.title}</span>
                <span class="flex-none transition group-open:rotate-180">
                  <Icon
                    id="ChevronDown"
                    size={32}
                    strokeWidth={0.75}
                    class="text-neutral"
                  />
                </span>
              </summary>
              <p
                class="leading-relaxed mb-6 group-open:animate-fadeIn"
                dangerouslySetInnerHTML={{ __html: question.answer }}
              >
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
