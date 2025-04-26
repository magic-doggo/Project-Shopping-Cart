import { useState } from "react"
import styles from '../styles/Card.module.css';
import { func, number, string } from "prop-types";


export default function Card({ imageURL, name, price, nrOfCopiesInShoppingCart, id, addToCart, removeFromCart, changeNrOfItemsFromCart}) {
    const [desiredNrOfCopiesInCart, setDesiredNrOfCopiesInCart] = useState(nrOfCopiesInShoppingCart);
    return (
        <div className={styles.container}>
            <img src={imageURL} alt="image of pokemon for sale" />
            <div className={styles.name}>{name}</div>
            <div className={styles.price}>{price}$</div>
            {(nrOfCopiesInShoppingCart > 0) ?
                (<div>
                    <button onClick={() => {removeFromCart(id), setDesiredNrOfCopiesInCart(nrOfCopiesInShoppingCart - 1)}}>-</button>
                {/* maybe do real time updates instead of blur? make sure only to update on a positive number */}
                    <input type="number" value={desiredNrOfCopiesInCart} onChange={(e) => setDesiredNrOfCopiesInCart(e.target.value)} onBlur={() => changeNrOfItemsFromCart(id, desiredNrOfCopiesInCart)}/>
                    <button onClick={() => {addToCart(id), setDesiredNrOfCopiesInCart(parseInt(nrOfCopiesInShoppingCart) + 1)}} >+</button>
                    {/* {(nrOfCopiesInShoppingCart != desiredNrOfCopiesInCart) ?
                    (<button onClick={() => changeNrOfItemsFromCart(id, desiredNrOfCopiesInCart)}>Save Changes to Cart</button>) : null} */}
                </div>) :
                (<button className={styles.addToCart} onClick={() => (addToCart(id), setDesiredNrOfCopiesInCart(parseInt(nrOfCopiesInShoppingCart) + 1))}>Add to Cart</button>)}
        </div>
    )
}

Card.PropTypes = {
    imageURL: string,
    name: string,
    price: number,
    nrOfCopiesInShoppingCart: number,
    id: number,
    addToCart: func,
    removeFromCart: func,
    changeNrOfItemsFromCart: func,
}