import Head from "next/head";
import { CreatePost } from "@/components/posts/createPost";
import Posts from "@/components/posts";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>notes app here</main>
      <CreatePost />
      <Posts />
    </>
  );
}
