import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "src/components/Main/Main.module.css";
import { Links } from "src/components/Links";
import { Headline } from "src/components/Headline";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const Main = (props) => {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <Headline page={props.page}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </Headline>
        <Links />
      </main>
    </>
  );
};
