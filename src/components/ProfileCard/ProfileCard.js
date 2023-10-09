import React from "react";
import { UserCircle } from "lucide-react";
import Link from "next/link";

export default function ProfileCard({
  children,
  href,
  className,
  type = "sm",
  ...rest
}) {
  const Tag = href ? Link : article;

  if (type === "md") {
    return (
      <Tag
        href={href}
        className={`${styles.post} ${type} ${className}`}
        {...rest}
      >
        <UserCircle className={styles.avatar} />
        <div>{i.user}</div>
        <div>{i.userId}</div>
        <div>{children}</div>
      </Tag>
    );
  }

  return (
    <Tag href={href} className={`${styles.post} ${type}`} {...rest}>
      <UserCircle className={styles.avatar} />
      <div>{i.user}</div>
      <div>{children}</div>
    </Tag>
  );
}
