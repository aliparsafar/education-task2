import { Button } from "./button";
import { Card } from "./card";
import { Gallerylink } from "./gallerylink";
import styles from "./mainsec.module.css"
import { Servicebox } from "./servicebox";
export function Mainsec(){
    return(
        <section>
            <div className={styles.featuressec}>
                <Button />
                <h2>Our Special Features</h2>
                <p className={styles.text}>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
                <Card />
            </div>
            <div className={styles.featuressec}>
                <Button />
                <h2>What Students Learn</h2>
                <p>At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include</p>
                <Servicebox />
            </div>
           
        </section>
    )
}