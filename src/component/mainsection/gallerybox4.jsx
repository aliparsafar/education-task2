import styles from "./gallerybox.module.css"
export function Gallerybox4() {
    return (
       <div>
         <div className={styles.image}>
            <img src="src/assets/image (19).svg" alt="" />
            <img src="src/assets/image (20).svg" alt="" />
            <img src="src/assets/image (21).svg" alt="" />
            <img src="src/assets/image (22).svg" alt="" />
        </div>

        <div className={styles.gallerybox}>
           <div className={styles.boxhead}>
                <h5>Computer Lab</h5>
                <div>
                <button>
                    <img src="src/assets/vector (stroke) (1).svg" alt="" />
                </button>
                <button>
                    <img src="src/assets/vector (stroke) (2).svg" alt="" />
                </button>
                </div>
           </div>

           <p>Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills</p>
        </div>
       </div>
    )
}