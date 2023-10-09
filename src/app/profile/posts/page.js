import { posts } from "@/data/data";
import styles from "./styles.module.css";
import { UserCircle } from "lucide-react";
import Link from "next/link";

export default function Posts() {
  console.log(posts);
  console.log(posts[0].message);
  return (
    <div className={styles.table}>
      {posts.map((i) => {
        return (
          <Link>
            <article className={styles.article}>
              <UserCircle className={styles.avatar} />
              <div>{i.user}</div>
              <div>{i.message}</div>
            </article>
          </Link>
        );
      })}
    </div>
  );
}
