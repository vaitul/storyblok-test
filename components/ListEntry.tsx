import { storyblokEditable } from "@storyblok/react";
import React from "react";

const ListEntry = ({ blok }: any) => {
  console.log(blok.url);
  return (
    <li className="grid" {...storyblokEditable(blok)}>
      {blok.url.url ? <a href={blok.url.url}>{blok.content}</a> : blok.content}
    </li>
  );
};

export default ListEntry;
