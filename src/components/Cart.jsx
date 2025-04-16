import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div>
            <header>
                <h1>PokeShop</h1>
                {/* make a root layout with the header that is shared between components?  https://reactrouter.com/6.28.0/start/tutorial#nested-routes*/}
                <h2>Items in your Cart</h2>
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