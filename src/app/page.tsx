import styles from "./page.module.scss";
import Lines from "@/app/components/lines/Lines";

export default function Home() {
    return (
        <main className={styles.main}>
            <Lines/>
        </main>
    );
}
