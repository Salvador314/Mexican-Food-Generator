import Image from "next/image";
import styles from "./page.module.css";
import { Headline } from "./Headline/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <Headline />
    </div>
  );
}
