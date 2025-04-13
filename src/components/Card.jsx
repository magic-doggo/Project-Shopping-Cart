export default function Card({ imageURL, name, price, nrOfCopiesInShoppingCart, id, addToCart }) {
    return (
        <div>
            <img src={imageURL} alt="image of pokemon for sale" />
            <div>{name}</div>
            <div>{price}$</div>
            {(nrOfCopiesInShoppingCart > 0) ? (<div>{nrOfCopiesInShoppingCart}</div>) :
                (<button onClick={() => addToCart(id)}>Add to Cart</button>)}
        </div>
    )
}