import styles from "./gallerylink.module.css"
export function Gallerylink(){
    return(
        <div className={styles.gallerylink}> 
        <button>All</button>
        <button>Classrooms</button>
        <button>Library</button>
        <button>Science Lab</button>
        <button>Computer Lab</button>
        <button>Garden and Nature Area</button>
    </div>
    )
}