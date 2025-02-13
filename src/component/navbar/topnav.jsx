import styles from "./navtop.module.css"
export function TopNav() {
    return (
        <nav className={styles.navtop}>
            <p>Admission is Open, Grab your seat now</p>
            <img src="src/assets/icon.svg" />
        </nav>
    )
}