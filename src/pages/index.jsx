/* eslint-disable @next/next/no-html-link-for-pages */
import { useCallback } from "react";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target);
    e.preventDefault();
    alert(foo);
  }, []);
  return (
    <>
      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="Index" />
    </>
  );
}
