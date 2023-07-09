import { useEffect, useState, useCallback, useMemo } from "react";

export const useCounter = () => {
  const [count, setcount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);
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

  const handlDisplay = useCallback((e) => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);
  return { count, isShow, handleClick, handlDisplay, doubleCount };
};
