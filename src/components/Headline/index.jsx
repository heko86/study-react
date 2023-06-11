import Image from "next/image";
import classes from "./Headline.module.css";

export function Headline(props) {
  return (
    <>
      <div className={classes.description}>
        <p>{props.page} Page</p>
        <div>{props.children}</div>
      </div>
      <div className={classes.center}>
        <Image
          className={classes.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </>
  );
}
