import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Card from "./Card";

const Cart = () => {
    const { addToCart, removeFromCart, shopItems, priceOfItemsInBasket, changeNrOfItemsFromCart } = useOutletContext();

    return (
        <div>
            {/* make a root layout with the header that is shared between components?  https://reactrouter.com/6.28.0/start/tutorial#nested-routes*/}
            <h3>Items in your Cart</h3>
            <div>
            {shopItems && shopItems.map((item) => {
                if(item.nrOfCopiesInShoppingCart > 0) return (
                    <Card key={item.pokeIndex} imageURL={item.icon} price={item.price} name={item.name} id={item.pokeIndex}
                    nrOfCopiesInShoppingCart={item.nrOfCopiesInShoppingCart} addToCart={addToCart} removeFromCart={removeFromCart} changeNrOfItemsFromCart={changeNrOfItemsFromCart}></Card>
                )
                return null;
            }
                )}
            </div>
            <div>
                <div>Total: {priceOfItemsInBasket}$</div>
                <button>Pay</button>
            </div>
        </div>
    )
}

export default Cart;