import Image from "next/image";
import styles from "@/styles/Home.module.css";

export function Headline(props) {
  console.log(props);
  return (
    <>
      <div className={styles.description}>
        <p>{props.page} Page</p>
        <div>{props.children}</div>
      </div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
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
