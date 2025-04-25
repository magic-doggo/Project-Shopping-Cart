import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Card from "./Card";
import styles from '../styles/Cart.module.css'

const Cart = () => {
    const { addToCart, removeFromCart, shopItems, priceOfItemsInBasket, changeNrOfItemsFromCart } = useOutletContext();

    return (
        <div className={styles.cartContainer}>
            {/* make a root layout with the header that is shared between components?  https://reactrouter.com/6.28.0/start/tutorial#nested-routes*/}
            <h3 className={styles.cartH3}>Items in your Cart:</h3>
            <div className={styles.cartAndPay}>
                <div className={styles.pokemonCartContainer}>
                {shopItems && shopItems.map((item) => {
                    if(item.nrOfCopiesInShoppingCart > 0) return (
                        <Card className={styles.card} key={item.pokeIndex} imageURL={item.icon} price={item.price} name={item.name} id={item.pokeIndex}
                        nrOfCopiesInShoppingCart={item.nrOfCopiesInShoppingCart} addToCart={addToCart} removeFromCart={removeFromCart} changeNrOfItemsFromCart={changeNrOfItemsFromCart}></Card>
                    )
                    return null;
                }
                    )}
                </div>
                <div>
                    <div className={styles.payOptions}>
                        <div>Total: {priceOfItemsInBasket}$</div>
                        <button className={styles.payButton}>Pay</button>
                    </div>
                    <br />
                    <div>Insert Coupons:</div>
                    <input className={styles.cartCouponInput} type="text" name="" id="" />
                </div>
            </div>
        </div>
    )
}

export default Cart;