import Icon from '@mdi/react';
import {mdiCartOutline } from '@mdi/js';

export default function ShoppingCartIcon({nrOfItemsInBasket, priceOfItemsInBasket}) {
    return (
        <div>
            <Icon path={mdiCartOutline}
                title="User Profile"
                size={2}
                color="red"
            />
            <div>{nrOfItemsInBasket}</div>
            <div>{priceOfItemsInBasket}$</div>
        </div>
    )
}