import styles from "./card.module.css"
export function Card(){
    return(
        <div className={styles.cards}>
        <div className={styles.box}>
            <img src="src/assets/icon container (6).svg" alt="" />
            <h4>Thematic Learning</h4>
            <p>Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.</p>
        </div>
        <div className={styles.box}>
        <img src="src/assets/icon container (7).svg" alt="" />
            <h4>STEAM Education</h4>
            <p>We offer innovative STEAM Science, Technology, Engineering, Arts, and Mathematics programs that promote hands-on exploration, critical thinking, and problem-solving skills.</p>
        </div>
        <div className={styles.box}>
            <img src="src/assets/icon container (10).svg" alt="" />
            <h4>Language Immersion</h4>
            <p>Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.</p>
        </div>
        <div className={styles.box}>
            <img src="src/assets/icon container (11).svg" alt="" />
            <h4>Art and Creativity</h4>
            <p>Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.</p>
        </div>
        <div className={styles.box}>
            <img src="src/assets/icon container (8).svg" alt="" />
            <h4>Outdoor Education</h4>
            <p>Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.</p>
        </div>
        <div className={styles.box}>
            <img src="src/assets/icon container (9).svg" alt="" />
            <h4>Play-Based Learning</h4>
            <p>Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.</p>
        </div>
        </div>
    )
}