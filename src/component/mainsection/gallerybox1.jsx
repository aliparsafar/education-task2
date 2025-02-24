import styles from "./gallerybox.module.css"
export function Gallerybox1() {
    return (
       <div>
         <div className={styles.image}>
            <img src="src/assets/image (7).svg" alt="" />
            <img src="src/assets/image (8).svg" alt="" />
            <img src="src/assets/image (9).svg" alt="" />
            <img src="src/assets/image (10).svg" alt="" />
        </div>

        <div className={styles.gallerybox}>
           <div className={styles.boxhead}>
                <h5>Classrooms</h5>
                <div>
                <button>
                    <img src="src/assets/vector (stroke) (1).svg" alt="" />
                </button>
                <button>
                    <img src="src/assets/vector (stroke) (2).svg" alt="" />
                </button>
                </div>
           </div>

           <p>Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.</p>
        </div>
       </div>
    )
}