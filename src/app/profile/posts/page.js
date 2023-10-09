import { posts } from "@/data/data";
import styles from "./styles.module.css";
import { UserCircle } from "lucide-react";
import NavLink from "@/components/NavLink";

export default function Posts() {
  return (
    <div className={styles.table}>
      {posts.map((i) => {
        return (
          <NavLink>
            <article className={styles.article}>
              <UserCircle className={styles.avatar} />
              <div>{i.user}</div>
              <div>{i.message}</div>
            </article>
          </NavLink>
        );
      })}
    </div>
  );
}
