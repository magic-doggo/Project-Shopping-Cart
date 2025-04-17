import { Link } from "react-router-dom";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  const [shopItems, setShopItems] = useState([]);
  const [nrOfItemsInBasket, setNrOfItemsInBasket] = useState(0);
  const [priceOfItemsInBasket, setPriceOfItemsInBasket] = useState(0);
  function addToCart(id) {
    setShopItems(shopItems.map(item => {
      if (item.pokeIndex === id) {
        setNrOfItemsInBasket(nrOfItemsInBasket + 1);
        setPriceOfItemsInBasket(priceOfItemsInBasket + item.price);
        return { ...item, nrOfCopiesInShoppingCart: item.nrOfCopiesInShoppingCart + 1 }
      } else return item;
    }))
  }
  function removeFromCart(id) {
    setShopItems(shopItems.map(item => {
      if (item.pokeIndex === id) {
        setNrOfItemsInBasket(nrOfItemsInBasket - 1);
        setPriceOfItemsInBasket(priceOfItemsInBasket - item.price);
        if ((item.nrOfCopiesInShoppingCart - 1) < 0) {
          return { ...item, nrOfCopiesInShoppingCart: 0 }
        }
        else return { ...item, nrOfCopiesInShoppingCart: item.nrOfCopiesInShoppingCart - 1 }
      } else return item;
    }))
  }
  return (
    <div>
      <header>
        <h1>PokeShop</h1>
        <h2>Gotta Buy 'Em All!</h2>
        <nav>
          <Link to=".">Home</Link>
          <Link to="shop">Shop</Link>
          <Link to="cart">Cart</Link>
        </nav>
      </header>
      <Outlet context={{ addToCart, removeFromCart, shopItems, setShopItems, nrOfItemsInBasket, setNrOfItemsInBasket, priceOfItemsInBasket, setPriceOfItemsInBasket }} />
    </div>
  )
}

export default App;