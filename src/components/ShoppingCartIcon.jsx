import Icon from '@mdi/react';
import { mdiCartOutline, mdiPanoramaWideAngle } from '@mdi/js';
import styles from '../styles/ShoppingCartIcon.module.css'
import PropTypes from 'prop-types';

export default function ShoppingCartIcon({ nrOfItemsInBasket, priceOfItemsInBasket }) {
    return (
        <div className={styles.container}>
            <Icon path={mdiCartOutline}
                title="CartOutline"
                size={1.8}
                color="red"
            />
            <div>{priceOfItemsInBasket}$</div>
            <Icon path={mdiPanoramaWideAngle}
                title="Circle"
                size={1.6}
                className={styles.circle}
            ></Icon>
            <div className={styles.nrOfItemsInBasket}>{nrOfItemsInBasket}</div>
        </div>
    )
}

ShoppingCartIcon.PropTypes = {
    nrOfItemsInBasket: PropTypes.number,
    priceOfItemsInBasket: PropTypes.number
}