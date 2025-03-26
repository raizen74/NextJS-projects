'use client'

import Image from "next/image"; // used for display images in an optimized way
import Link from "next/link";
import { usePathname } from "next/navigation"; // used to get the current path

import logoImg from "@/assets/logo.png"; // object with src property
import MainHeaderBackground from "./main-header-background.js";
import classes from "./main-header.module.css"; // styles are scoped to this component
import NavLink from "./nav-link";

export default function MainHeader() {
  const path = usePathname(); // get the current path

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href=''>
          {/* By default, images are lazy loaded. Set priority=true to not render the page until the image is fetched */}
          <Image src={logoImg} alt='A plate with food on it.' priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
