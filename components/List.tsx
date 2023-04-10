import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const List = ({ blok }: any) => {
  return (
    <div>
      <h3>{blok.Title}</h3>
      <ul {...storyblokEditable(blok)}>
        {blok.Items.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </ul>
    </div>
  );
};

export default List;
