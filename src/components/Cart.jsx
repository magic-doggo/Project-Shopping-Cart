import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div>
            <header>
                <h1>PokeShop</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/cart">Cart</Link>
                </nav>
            </header>
        </div>
    )
}

export default Cart;