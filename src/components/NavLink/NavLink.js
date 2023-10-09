"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./styles.module.css";

export default function NavLink({ href = "", children, rest }) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${styles.navLink} ${
        href === pathname ? styles.active : null
      }`}
    >
      {children}
    </Link>
  );
}
