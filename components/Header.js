import classes from "./Header.module.css";

import Link from "next/link";

export function Header(props) {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.anchor}>
        index
      </Link>
      <Link href="/about" className={classes.anchor}>
        about
      </Link>
    </header>
  );
}
