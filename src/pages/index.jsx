/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect, useState, useCallback } from "react";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";

export default function Home() {
  const [count, setcount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

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

  const handlDisplay = useCallback((e) => {
    setIsShow((isShow) => !isShow);
  }, []);

  useEffect(() => {
    console.log(`マウント時${count}`);
    //基本的にNextjsの管轄内にあるDOMに直接アクセスするのは厳禁
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log(`アンマウント時${count}`);
      document.body.style.backgroundColor = "";
    };
  }, [count]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      console.log("ココ");
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  return (
    <>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handlDisplay}>{isShow ? "非表示" : "表示"}</button>

      <input type="text" value={text} onChange={handleChange} />
      <Main page="Index" />
    </>
  );
}
