import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import React from "react";

type TProps = {
  [k: string]: any;
};

const Page = ({ blok }: TProps) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
