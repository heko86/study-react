import classes from "./Header.module.css";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "/posts", label: "Posts" },
  { href: "/about", label: "About" },
];

export const Header = (props) => {
  return (
    <header className={classes.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link className={classes.anchor} key={item.href} href={item.href}>
            {item.label}
          </Link>
        );
      })}
    </header>
  );
};
