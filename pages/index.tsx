import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { StoryblokComponent, getStoryblokApi } from "@storyblok/react";
type TProps = {
  story: {
    [x: string]: any;
  };
};
const Home: NextPage<TProps> = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>{props.story ? props.story.name : "My Site"}</h1>
      </header>

      <main>
        <StoryblokComponent blok={props.story.content} />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";

  // load the draft version
  let sbParams:any = {
    version: process.env.VERSION_TYPE
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}

export default Home;
