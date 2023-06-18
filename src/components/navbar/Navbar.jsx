"use client";
import Link from "next/link";
import React from "react";
import DarkMode from "../Darkmode/Darkmode";
import { signOut, useSession } from "next-auth/react";
const Links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 5,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];
const Navbar = () => {
  const session = useSession();
  return (
    <div className="navContainer">
      <Link href="/" className="navLogo">
        Idea Developer
      </Link>
      <div className="navLinks">
        <DarkMode />
        {Links.map((link) => (
          <Link key={link.id} href={link.url} className="navLink">
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className="navLogout" onClick={() => signOut()}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
