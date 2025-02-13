import styles from "./gallerybox.module.css"
export function Gallerybox5() {
    return (
       <div>
         <div className={styles.image}>
            <img src="src/assets/image (23).svg" alt="" />
            <img src="src/assets/image (24).svg" alt="" />
            <img src="src/assets/image (25).svg" alt="" />
            <img src="src/assets/image (26).svg" alt="" />
        </div>

        <div className={styles.gallerybox}>
           <div className={styles.boxhead}>
                <h5>Garden and Nature Area</h5>
                <div>
                <button>
                    <img src="src/assets/vector (stroke) (1).svg" alt="" />
                </button>
                <button>
                    <img src="src/assets/vector (stroke) (2).svg" alt="" />
                </button>
                </div>
           </div>

           <p>Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.</p>
        </div>
       </div>
    )
}