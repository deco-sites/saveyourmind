import type { ImageWidget } from "apps/admin/widgets.ts";
import type { BlogPost } from "apps/blog/types.ts";
import Image from "apps/website/components/Image.tsx";

export interface Post {
  title: string;
  author: string;
  excerpt: string;
  image: ImageWidget;
  date: string;
  readingTime?: string;
  tags: string[];
}

export interface Props {
  title?: string;
  description?: string;
  posts?: BlogPost[] | null;
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function BlogPosts({
  title = "Here's a component for you to showcase your blogposts",
  description = "This subheading is fully editable, remember?",
  posts = [
    {
      title: "Title of blogpost #1",
      slug: "",
      authors: [],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [],
      content: "",
    },
    {
      title: "Title of blogpost #1",
      slug: "",
      authors: [],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [],
      content: "",
    },
    {
      title: "Title of blogpost #1",
      slug: "",
      authors: [],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [],
      content: "",
    },
  ],
}: Props) {
  function calculateReadingTime(words: number): string {
    const wordsPerMinute = 250;
    const estimatedTimeMinutes = words / wordsPerMinute;

    const roundedReadingTime = Math.round(estimatedTimeMinutes);
    return `${roundedReadingTime} min`;
  }

  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto px-4 xl:px-0 text-sm py-10">
      <div class="space-y-16">
        <div class="flex flex-col lg:flex-row gap-4 justify-between">
          <div class="space-y-6 lg:w-1/2">
            <h2 class="text-4xl leading-snug">
              {title}
            </h2>
            <p class="text-lg">
              {description}
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts?.map((post) => (
            <a
              href={`blog/${post.slug}`}
              class="border border-secondary rounded-lg overflow-hidden"
            >
              <Image
                width={640}
                class="w-full object-fit z-10"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={post.image || ""}
                alt={post.title}
                decoding="async"
                loading="lazy"
              />
              <div class="p-6 space-y-4">
                <div class="font-semibold">
                  {calculateReadingTime(post.content.split(" ").length)}
                </div>
                <div class="space-y-2">
                  <h3 class="text-2xl">{post.title}</h3>
                  <p class="text-base">{post.excerpt}</p>
                </div>
                {
                  /* <div class="flex flex-wrap gap-2">
                  {post.tags?.map((tag) => (
                    <div class="badge badge-lg badge-primary text-xs">
                      {tag}
                    </div>
                  ))}
                </div> */
                }
                <div class="flex flex-wrap gap-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.authors[0].name}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
