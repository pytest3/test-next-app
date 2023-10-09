import { posts } from "@/data/data";
import styles from "./page.module.css";
import NavLink from "@/components/NavLink";
import { UserCircle } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className={styles.table}>
      {posts.map((i) => {
        return (
          <NavLink key={i.id} href={`/username/status/${i.id}`}>
            <article className={styles.post}>
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
