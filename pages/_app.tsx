import "../styles/globals.css";
import type { AppProps } from "next/app";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import List from "../components/List";
import Page from "../components/Page";
import ListEntry from "../components/ListEntry";

const components = {
  page: Page,
  List: List,
  list_entry: ListEntry,
};

storyblokInit({
  accessToken: process.env.ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
