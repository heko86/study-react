import classes from "./Header.module.css";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/posts", label: "Posts" },
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
