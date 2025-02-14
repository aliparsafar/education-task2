import styles from "./footerlittel.module.css"
export function Footerlittel(){
    return(
        <div className={styles.footerlittel}>
        <img src="src/assets/logo.svg" alt="" />
        <p>
        We believe in the power of play to foster creativity, problem-solving skills, and imagination.
        </p>
        <div className={styles.contactus}>
            <img src="src/assets/icon (4).svg" alt="" />
            <p>hello@littlelearners.com</p>
        </div>
        <div className={styles.contactus}>
            <img src="src/assets/icon (5).svg" alt="" />
            <p>+91 91813 23 2309</p>
        </div>
        <div className={styles.contactus}>
            <img src="src/assets/icon (6).svg" alt="" />
            <p>Somewhere in the World</p>
        </div>
    </div>
    )
}