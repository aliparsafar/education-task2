import { Leftside } from "./leftside";
import { Rightside } from "./rightside";
import styles from "./header.module.css"

export function Header(){
    return(
    <header>
        <div className={styles.mainheader}>
            <Leftside />
            <Rightside />
           
        </div>
    </header>
    )
}