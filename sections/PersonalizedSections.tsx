import { Section } from "deco/blocks/section.ts";

export interface Props {
  sections: Section[];
}

export default function PersonalizedSections({ sections }: Props) {
  return (
    <div class="flex items-center justify-center bg-base-content rounded-t-[100px] rounded-b-[100px] px-4 py-8">
      {sections.map((section) => {
        const { Component, props } = section;

        return <Component {...props} />;
      })}
    </div>
  );
}
