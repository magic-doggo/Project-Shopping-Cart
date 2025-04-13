export default function Card({ imageURL, name, price, nrOfCopiesInShoppingCart, id, addToCart, removeFromCart}) {
    return (
        <div>
            <img src={imageURL} alt="image of pokemon for sale" />
            <div>{name}</div>
            <div>{price}$</div>
            {(nrOfCopiesInShoppingCart > 0) ?
                (<div>
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <div>{nrOfCopiesInShoppingCart}</div>
                    <button onClick={() => addToCart(id)}>+</button>
                </div>) :
                (<button onClick={() => addToCart(id)}>Add to Cart</button>)}
        </div>
    )
}