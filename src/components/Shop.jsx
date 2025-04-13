import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Shop = () => {
    const [shopItems, setShopItems] = useState([]);
    //read lesson api lesson examples again again
    
    function addToCart(id) {
        setShopItems(shopItems.map(item => {
            if (item.pokeIndex === id) {
                return {...item, nrOfCopiesInShoppingCart: item.nrOfCopiesInShoppingCart+1}
            } else return item;
        }))
    }
    function removeFromCart(id) {
        setShopItems(shopItems.map(item => {
            if (item.pokeIndex === id) {
                if ((item.nrOfCopiesInShoppingCart-1) < 0) {
                return {...item, nrOfCopiesInShoppingCart: 0}
                }
                else return {...item, nrOfCopiesInShoppingCart: item.nrOfCopiesInShoppingCart-1}
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
                let pokemonShopItemObject = { name: shopItemsData.forms[0].name, icon: shopItemsData.sprites.front_default, pokeIndex: tempIndex, 
                    price: shopItemsData.stats[0].base_stat, nrOfCopiesInShoppingCart: 0}
                    //should i track items in shopping cart inside each item? or have a separate state that they get added to?
                tempShopItems.push(pokemonShopItemObject);
            }
            setShopItems(tempShopItems)
        }
        getPokemonForSale(2);
    }, [])

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
            <h2>Shop Page</h2>
            <div>
                {shopItems.map((item)=>
                <Card key={item.pokeIndex} imageURL={item.icon} price={item.price} name={item.name} id={item.pokeIndex}
                nrOfCopiesInShoppingCart={item.nrOfCopiesInShoppingCart} addToCart={addToCart} removeFromCart={removeFromCart}></Card>
                )}
            </div>
        </div>
    )
}

export default Shop;


//can use stats[0].base_stat as price (it is the hp)
//can also show abilities (need to loop through array ti get each ability name?)


//for individual cards/items, do like rimi: image on top, name underneath, price underneath.
//under that, a wide button "add to cart". when clicked, show number in middle, - and + button on sides




//OPTIONAL
//buttons on bottom to scroll to a new page of new items. 12ish items on page, 100 possible pages?