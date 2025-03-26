"use client"; // only this small component will be rendered on the client side

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";
export default function NavLink({ href, children }) {
  const path = usePathname(); // get the current path

  return (
    <Link
      href={href}
      className={path.startsWith(href) ? `${classes.link} ${classes.active}` : `${classes.link}`}
    >
      {children}
    </Link>
  );
}
