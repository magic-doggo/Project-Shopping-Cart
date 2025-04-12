export default function Card({imageURL, name, price}) {
    return (
        <div>
            <img src={imageURL} alt="image of pokemon for sale" />
            <div>{name}</div>
            <div>{price}$</div>
            <button>Add to Cart</button>
        </div>
    )
}