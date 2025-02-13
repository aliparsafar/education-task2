import styles from "./gallerybox.module.css"
export function Gallerybox3() {
    return (
       <div>
         <div className={styles.image}>
            <img src="src/assets/image (15).svg" alt="" />
            <img src="src/assets/image (16).svg" alt="" />
            <img src="src/assets/image (18).svg" alt="" />
            <img src="src/assets/image (17).svg" alt="" />
        </div>

        <div className={styles.gallerybox}>
           <div className={styles.boxhead}>
                <h5>Science Lab</h5>
                <div>
                <button>
                    <img src="src/assets/vector (stroke) (1).svg" alt="" />
                </button>
                <button>
                    <img src="src/assets/vector (stroke) (2).svg" alt="" />
                </button>
                </div>
           </div>

           <p>Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.</p>
        </div>
       </div>
    )
}