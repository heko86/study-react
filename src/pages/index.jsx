/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect, useState } from "react";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";

export default function Home() {
  const [count, setcount] = useState(1);
  const handleClick = (e) => {
    //前の状態を受け取って処理する
    setcount((count) => count + 1);
    setcount((count) => count + 1);
  };
  useEffect(() => {
    //基本的にNextjsの管轄内にあるDOMに直接アクセスするのは厳禁
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="Index" />
    </>
  );
}
