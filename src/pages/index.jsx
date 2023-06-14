/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect } from "react";

import { Header } from "src/components/Header";
import { Main } from "src/components/Main";

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target);
    e.preventDefault();
    alert(foo);
  }, []);
  useEffect(() => {
    console.log("マウント時");
    //基本的にNextjsの管轄内にあるDOMに直接アクセスするのは厳禁
    document.body.style.backgroundColor = "lightblue";

    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <>
      <Header />
      <a href="/about" onclick={handleClick}>
        ボタン
      </a>
      <Main page="Index" />
    </>
  );
}
