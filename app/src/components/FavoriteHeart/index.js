import React from 'react'
import { BsFillMusicPlayerFill, BsFillPauseFill} from "react-icons/bs";
import styles from './styles.module.scss'


export default ({ toggleFavorite, favorite, id, size }) => (
    <div className={styles.favoriteContainer} onClick={() => toggleFavorite(id)}>
        {
            !favorite
            &&
            <BsFillMusicPlayerFill size={size} />
        }
        {
            favorite
            &&
            <BsFillPauseFill size={size} />
        }
    </div>
)
