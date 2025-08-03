import Image from "next/image";
import styles from "./page.module.css";
import ClientContent from "./ClientContent"
export default function Home() {
  return (
    <div className={styles.page}>
     <ClientContent />
    </div>
  );
}
