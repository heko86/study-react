/* eslint-disable @next/next/no-html-link-for-pages */

import { Header } from "src/components/Header";
import { Main } from "src/components/Main";

const Home = (props) => {
  const {
    count,
    isShow,
    handleClick,
    handlDisplay,
    text,
    array,
    handleChange,
    handleAdd,
  } = props;

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

      <Main page="Index" />
    </>
  );
};
export default Home;
