import styles from "./service.module.css"
export function Servicebox(){
    return(
        <div className={styles.servicebox}>
            <div className={styles.servicecard}>
                {/* <img src="src/assets/shape.svg" alt="" /> */}
                <img src="src/assets/image (1).svg" alt="" />
                <h4>Language Arts</h4>
                <p>Reading, writing, storytelling, and communication skills.</p>
            </div>
            <div className={styles.servicecard}>
                <img src="src/assets/image (2).svg" alt="" />
                <h4>Mathematics</h4>
                <p>Number sense, basic operations, problem-solving, and logic.</p>
            </div>
            <div className={styles.servicecard}>
                <img src="src/assets/image (3).svg" alt="" />
                <h4>Science</h4>
                <p>Exploring the natural world through hands-on experiments and investigations.</p>
            </div>
            <div className={styles.servicecard}>
                <img src="src/assets/image (4).svg" alt="" />
                <h4>Social Studies</h4>
                <p>Cultivating an understanding of diverse cultures and communities.</p>
            </div>
            <div className={styles.servicecard}>
                <img src="src/assets/image (5).svg" alt="" />
                <h4>Arts and Crafts</h4>
                <p>Encouraging creativity through various art forms and crafts.</p>
            </div>
            <div className={styles.servicecard}>
                <img src="src/assets/image (6).svg" alt="" />
                <h4>Physical Education</h4>
                <p>Promoting physical fitness, coordination, and teamwork.</p>
            </div>
         
        </div>
    )
}