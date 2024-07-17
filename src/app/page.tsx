import styles from "./page.module.scss";
import Lines from "@/app/components/lines/Lines";
import Dates from "@/app/components/dates/Dates";

export default function Home() {
    return (
        <main className={styles.main}>
            <Lines/>
            <Dates/>
        </main>
    );
}
