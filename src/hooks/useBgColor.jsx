import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
export const useBgColor = () => {
  const router = useRouter();
  const bgColor = useMemo(() => {
    switch (router.pathname) {
      case "/": {
        return "lightblue";
      }
      case "/about": {
        return "beige";
      }
      default: {
        return "";
      }
    }
  }, [router.pathname]);

  useEffect(() => {
    //基本的にNextjsの管轄内にあるDOMに直接アクセスするのは厳禁
    document.body.style.backgroundColor = bgColor;

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};
