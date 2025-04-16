import { Link } from "react-router-dom";
import Shop from "./components/Shop";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  const [shopItems, setShopItems] = useState([]);
  const [nrOfItemsInBasket, setNrOfItemsInBasket] = useState(0);
  const [priceOfItemsInBasket, setPriceOfItemsInBasket] = useState(0);
  return (
    <div>
      <header>
        <h1>PokeShop</h1>
        <nav>
          <Link to=".">Home</Link>
          {/* fix this. do not need shop component there? */}
          <Link to="shop">Shop</Link>
          <Link to="cart">Cart</Link>
        </nav>
      </header>
      <h2>Tired of catching them all by yourself? PokeShop delivers all your pokemon straight to your doorstep!</h2>
      <Outlet context={{shopItems, setShopItems, nrOfItemsInBasket, setNrOfItemsInBasket, priceOfItemsInBasket, setPriceOfItemsInBasket}} />
    </div>
  )
}

export default App;