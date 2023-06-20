import { useEffect } from "react";
export const useBgLightBlue = () => {
  useEffect(() => {
    //基本的にNextjsの管轄内にあるDOMに直接アクセスするのは厳禁
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  });
};
