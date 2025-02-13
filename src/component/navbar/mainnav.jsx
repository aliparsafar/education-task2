import { Logomain } from "./logomain";
import { Menu } from "./menu";
import styles from "./mainnav.module.css"

export function Mainnav(){
    return(
        <nav className={styles.mainnav}>
            <Logomain />
            <Menu />
        </nav>
    )
}