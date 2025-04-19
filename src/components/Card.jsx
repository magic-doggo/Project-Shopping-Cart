import { useState } from "react"

export default function Card({ imageURL, name, price, nrOfCopiesInShoppingCart, id, addToCart, removeFromCart, changeNrOfItemsFromCart}) {
    const [desiredNrOfCopiesInCart, setDesiredNrOfCopiesInCart] = useState(nrOfCopiesInShoppingCart);
    return (
        <div>
            <img src={imageURL} alt="image of pokemon for sale" />
            <div>{name}</div>
            <div>{price}$</div>
            {(nrOfCopiesInShoppingCart > 0) ?
                (<div>
                    <button onClick={() => {removeFromCart(id), setDesiredNrOfCopiesInCart(nrOfCopiesInShoppingCart - 1)}}>-</button>
                    <button onClick={() => {addToCart(id), setDesiredNrOfCopiesInCart(parseInt(nrOfCopiesInShoppingCart) + 1)}} >+</button>
                {/* maybe do real time updates instead of blur? make sure only to update on a positive number */}
                    <input type="number" value={desiredNrOfCopiesInCart} onChange={(e) => setDesiredNrOfCopiesInCart(e.target.value)} onBlur={() => changeNrOfItemsFromCart(id, desiredNrOfCopiesInCart)}/>
                    {/* {(nrOfCopiesInShoppingCart != desiredNrOfCopiesInCart) ?
                    (<button onClick={() => changeNrOfItemsFromCart(id, desiredNrOfCopiesInCart)}>Save Changes to Cart</button>) : null} */}
                </div>) :
                (<button onClick={() => (addToCart(id), setDesiredNrOfCopiesInCart(parseInt(nrOfCopiesInShoppingCart) + 1))}>Add to Cart</button>)}
        </div>
    )
}