import styles from "./gallerybox.module.css"
export function Gallerybox2() {
    return (
       <div>
         <div className={styles.image}>
            <img src="src/assets/image (11).svg" alt="" />
            <img src="src/assets/image (12).svg" alt="" />
            <img src="src/assets/image (13).svg" alt="" />
            <img src="src/assets/image (14).svg" alt="" />
        </div>

        <div className={styles.gallerybox}>
           <div className={styles.boxhead}>
                <h5>Library</h5>
                <div>
                <button>
                    <img src="src/assets/vector (stroke) (1).svg" alt="" />
                </button>
                <button>
                    <img src="src/assets/vector (stroke) (2).svg" alt="" />
                </button>
                </div>
           </div>

           <p>Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.</p>
        </div>
       </div>
    )
}