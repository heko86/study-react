import { Inter } from "next/font/google";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";

const inter = Inter({ subsets: ["latin"] });

export default function About({
  count,
  isShow,
  handleClick,
  handlDisplay,
  text,
  array,
  handleChange,
  handleAdd,
}) {
  useBgLightBlue();
  return (
    <>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handlDisplay}>{isShow ? "非表示" : "表示"}</button>

      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="About" />
    </>
  );
}
