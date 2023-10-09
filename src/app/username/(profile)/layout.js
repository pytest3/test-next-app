import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "@/components/NavLink";

export default function ProfileLayout({ children }) {
  return (
    <div>
      <article className={styles.userInfo}>
        <h1>John Doe</h1>
        <span>@john doe</span>
      </article>

      <nav className={styles.navbar}>
        <NavLink href="/username/posts">Posts</NavLink>
        <NavLink href="/username/replies">Replies</NavLink>
        <NavLink href="/username/likes">Likes</NavLink>
      </nav>
      {children}
    </div>
  );
}
