import { useEffect, useState, useCallback } from "react";

export const useCounter = () => {
  const [count, setcount] = useState(1);
  const [isShow, setIsShow] = useState(true);
  const handleClick = useCallback(
    (e) => {
      //前の状態を受け取って処理する
      console.log(count);
      if (count < 10) {
        setcount((prevCount) => prevCount + 1);
      }
    },
    [count]
  );
  useEffect(() => {
    console.log(`マウント時${count}`);

    return () => {
      console.log(`アンマウント時${count}`);
    };
  }, [count]);

  const handlDisplay = useCallback((e) => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);
  return { count, isShow, handleClick, handlDisplay };
};
