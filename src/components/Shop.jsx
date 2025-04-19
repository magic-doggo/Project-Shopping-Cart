import Card from "./Card";
import React, { Component } from 'react';
import { useOutletContext, Outlet } from "react-router-dom";

    const Shop = () => {   
    const { addToCart, removeFromCart, shopItems, changeNrOfItemsFromCart} = useOutletContext();
    return (

        <div>
            <h3>Shop Page</h3>
            <div>
                {shopItems && shopItems.map((item) =>
                    <Card key={item.pokeIndex} imageURL={item.icon} price={item.price} name={item.name} id={item.pokeIndex}
                        nrOfCopiesInShoppingCart={item.nrOfCopiesInShoppingCart} addToCart={addToCart} removeFromCart={removeFromCart} changeNrOfItemsFromCart={changeNrOfItemsFromCart}></Card>
                )}
            </div>
        </div>
    )
}

export default Shop;

//useParams() if planning to make subpages for items https://www.theodinproject.com/lessons/node-path-react-new-react-router

//min 11, shomehow pass data through router? not possible to pass data back to parents? https://www.youtube.com/watch?v=J6-Iw0cJYJk

//OPTIONAL
//buttons on bottom to scroll to a new page of new items. 12ish items on page, 100 possible pages?
//footer page, shared between all components
//pokemon text font for header
//FIX changeNrOfItemsFromCart and add/remove to calculate price directly from state? check if it loses too much performance?
//maybe new state containing only items in basket, and iterate over items there to see price/quantity of items in basket