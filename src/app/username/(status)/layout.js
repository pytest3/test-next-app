import styles from "./styles.module.css";
import { UserCircle, BarChart2 } from "lucide-react";

export default function StatusLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <article className={styles.post}>
        <h1 className={styles.name}>John Doe</h1>
        <UserCircle className={styles.avatar} />
        <span className={styles.userId}>@johndoe1234</span>
      </article>
      {children}
      <div className={styles.engagementWrapper}>
        <BarChart2 className={styles.icon} />
        <span className={styles.engagementText}>View post engagements</span>
      </div>
      {/* <form className={styles.form}>
        <label>Post your reply</label>
        <input type="text"></input>
      </form> */}
    </div>
  );
}
