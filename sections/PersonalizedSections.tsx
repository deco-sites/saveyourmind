import { Section } from "deco/blocks/section.ts";

export interface Props {
  sections: Section[];
}

export default function PersonalizedSections({ sections }: Props) {
  return (
    <div class="flex flex-col items-center justify-center bg-base-content rounded-t-[60px] rounded-b-[60px] md:rounded-t-[100px] md:rounded-b-[100px] px-4 py-12 w-full">
      {sections.map((section) => {
        const { Component, props } = section;

        return <Component {...props} />;
      })}
    </div>
  );
}
