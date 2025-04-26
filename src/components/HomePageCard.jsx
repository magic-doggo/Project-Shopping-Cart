import { useState } from "react"
import styles from '../styles/Home.module.css'
import propTypes from "prop-types";

export default function HomePageCard({ shopItem }) {
    const [isGifShown, setIsGifShown] = useState(false);
    return (
        <div className={styles.imgContainer}>
            {isGifShown ?
                (<img src={shopItem.gif} alt="" onMouseLeave={() => {
                    setTimeout(() => {
                        setIsGifShown(false);
                      }, 1000);}} className={styles.gif} />) :
                (<img src={shopItem.icon} alt="" onMouseEnter={() => {
                    setIsGifShown(true)}} className={styles.icon}/>)}
        </div>
    )
}

HomePageCard.propTypes = {
    shopItem: propTypes.object
}