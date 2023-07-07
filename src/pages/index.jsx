/* eslint-disable @next/next/no-html-link-for-pages */

import { useCallback, useEffect, useState } from "react";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";

const Home = (props) => {
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setPosts(json);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);
  console.log(posts);
  return (
    <>
      <Header />
      {posts.length > 0 ? (
        <ol>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ol>
      ) : null}
      <Main page="Index" />
    </>
  );
};
export default Home;
