import { useEffect } from "react";
import Card from "./Card";
import React, { Component } from 'react';
import { useOutletContext, Outlet } from "react-router-dom";

    const Shop = () => {
   
    const { addToCart, removeFromCart, shopItems, setShopItems} = useOutletContext();
    useEffect(() => {
        async function getPokemonForSale(nrOfPokemon) {
            //could create another argument, pokemonStartingIndex. And use this when user clicks on page 2,3, etc
            //to show pokemon starting from nrOfPokemon x nr of page
            //figure out how to store pokemons between renders, not to call api again
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
            <h3>Shop Page</h3>
            <div>
                {shopItems && shopItems.map((item) =>
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

//useParams() if planning to make subpages for items https://www.theodinproject.com/lessons/node-path-react-new-react-router

//min 11, shomehow pass data through router? not possible to pass data back to parents? https://www.youtube.com/watch?v=J6-Iw0cJYJk
//read router doc again <Route path="/" element={<ShopPage items={items} addItemToCart={addItemToCart} />} />

//create home page, not just app page. app page just shares headers and state/functions with all children. make home page child of app, showing intro of website



//OPTIONAL
//buttons on bottom to scroll to a new page of new items. 12ish items on page, 100 possible pages?
