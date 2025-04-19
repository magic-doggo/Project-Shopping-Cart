import { Link } from "react-router-dom";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import ShoppingCartIcon from "./components/ShoppingCartIcon";
const App = () => {
  const [shopItems, setShopItems] = useState([]);
  const [nrOfItemsInBasket, setNrOfItemsInBasket] = useState(0);
  const [priceOfItemsInBasket, setPriceOfItemsInBasket] = useState(0);
  function addToCart(id) {
    setShopItems(shopItems.map(item => {
      if (item.pokeIndex === id) {
        setNrOfItemsInBasket(nrOfItemsInBasket + 1);
        setPriceOfItemsInBasket(priceOfItemsInBasket + item.price);
        return { ...item, nrOfCopiesInShoppingCart: parseInt(item.nrOfCopiesInShoppingCart) + 1 }
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
        else return { ...item, nrOfCopiesInShoppingCart: parseInt(item.nrOfCopiesInShoppingCart) - 1 }
      } else return item;
    }))
  }
  function changeNrOfItemsFromCart(id, nrOfCopiesToBeInCart) {
    setShopItems(shopItems.map(item => {
      if (item.pokeIndex === id) {
        //i should just iterate over the cart items to count instead of this hack?
        let differenceInCopiesOfThisItemInCart = nrOfCopiesToBeInCart - item.nrOfCopiesInShoppingCart;
        setNrOfItemsInBasket(nrOfItemsInBasket + (differenceInCopiesOfThisItemInCart)); 
        setPriceOfItemsInBasket(priceOfItemsInBasket + (item.price * (nrOfCopiesToBeInCart - item.nrOfCopiesInShoppingCart)));
        if ((nrOfCopiesToBeInCart ) < 0) { //should not need this if i add form validation against negative nrs?
          return { ...item, nrOfCopiesInShoppingCart: 0 }
        }
        else return { ...item, nrOfCopiesInShoppingCart: nrOfCopiesToBeInCart }
      } else return item;
    }))
  }

  useEffect(() => {
    async function getPokemonForSale(nrOfPokemon) {
      //could create another argument, pokemonStartingIndex. And use this when user clicks on page 2,3, etc
      //to show pokemon starting from nrOfPokemon x nr of page
      let tempShopItems = [];
      for (let tempIndex = 1; tempIndex < (nrOfPokemon + 1); tempIndex++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${tempIndex}`);
        if (!response.ok) {
          throw new Error(`Error fetching data for pokemon index ${tempIndex}`)
        }
        const shopItemsData = await response.json();
        let pokemonShopItemObject = {
          name: shopItemsData.forms[0].name, icon: shopItemsData.sprites.front_default, pokeIndex: tempIndex,
          price: shopItemsData.stats[0].base_stat, nrOfCopiesInShoppingCart: 0
        }
        //should i track items in shopping cart inside each item? or have a separate state that they get added to?
        tempShopItems.push(pokemonShopItemObject);
      }
      console.log("called api");
      setShopItems(tempShopItems);
    }
    getPokemonForSale(2);
  }, [])

  return (
    <div>
      <header>
        <h1>PokeShop</h1>
        <h2>Gotta Buy 'Em All!</h2>
        <nav>
          <Link to="home">Home</Link>
          <Link to="shop">Shop</Link>
          <Link to="cart"><ShoppingCartIcon nrOfItemsInBasket={nrOfItemsInBasket} priceOfItemsInBasket={priceOfItemsInBasket}></ShoppingCartIcon></Link>
        </nav>
      </header>
      <Outlet context={{ addToCart, removeFromCart, shopItems, setShopItems, nrOfItemsInBasket, setNrOfItemsInBasket, priceOfItemsInBasket, setPriceOfItemsInBasket, changeNrOfItemsFromCart}} />
    </div>
  )
}

export default App;