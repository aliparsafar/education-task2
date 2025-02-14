import { Footerlittel } from "./footerlittel";
import styles from "./footer.module.css"
import { Footerul1 } from "./footerul1";
import { Footerul2 } from "./footerul2";
import { Footerul3 } from "./footerul3";
import { Footerul4 } from "./footerul4";
import { Trems } from "./trems";

export function Footer(){
    return(
        <div className={styles.footer}> 
            <div className={styles.footercontain}>
                <Footerlittel />
                <Footerul1 />
                <Footerul2 />
                <Footerul3 />
                <Footerul4 />

            </div>
            <Trems />
        </div>
    )
}