import styles from "./trems.module.css"
export function Trems() {
    return (
       <div className={styles.copyright}>
         <div className={styles.rules}>
            <ul>
                <li><a href="">Terms of Service</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Cookie Policy</a></li>
            </ul>
        </div>

        <div className={styles.icon}>
            <a href=""><img src="src/assets/button (3).svg" alt="" /></a>
            <a href=""><img src="src/assets/button (4).svg" alt="" /></a>
            <a href=""><img src="src/assets/button (5).svg" alt="" /></a>
        </div>
       </div>
    )
}