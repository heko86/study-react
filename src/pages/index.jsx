/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect, useState, useCallback } from "react";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";

export default function Home() {
  const [count, setcount] = useState(1);
  const handleClick = useCallback(
    (e) => {
      //前の状態を受け取って処理する
      console.log(count);
      if (count < 10) {
        setcount((count) => count + 1);
      }
    },
    [count]
  );
  useEffect(() => {
    console.log(`マウント時${count}`);
    //基本的にNextjsの管轄内にあるDOMに直接アクセスするのは厳禁
    document.body.style.backgroundColor = "lightblue";

    return () => {
      console.log(`アンマウント時${count}`);
      document.body.style.backgroundColor = "";
    };
  }, [count]);
  return (
    <>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="Index" />
    </>
  );
}
