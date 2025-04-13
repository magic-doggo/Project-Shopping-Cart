import Icon from '@mdi/react';
import {mdiCartOutline } from '@mdi/js';

export default function ShoppingCartIcon({nrOfItemsInBasket}) {
    return (
        <div>
            {/* <img src="null" alt="" /> */}
            <Icon path={mdiCartOutline}
                title="User Profile"
                size={1}
                color="red"
            />
            <div>{nrOfItemsInBasket}</div>
        </div>
    )
}