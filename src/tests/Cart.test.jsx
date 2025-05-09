import Cart from "../components/Cart";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import RenderRouteWithOutletContext from "../components/RenderRouteWithOutletContext";
import userEvent from "@testing-library/user-event";
import * as ReactRouter from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';

const mockOutletContextData = {
    addToCart: vi.fn(),
    removeFromCart: vi.fn(),
    shopItems: [{
        name: "name1", icon: "icon1", pokeIndex: 1,
        price: 10, nrOfCopiesInShoppingCart: 0, gif: "gif1"
    }, {
        name: "name2", icon: "icon2", pokeIndex: 2,
        price: 20, nrOfCopiesInShoppingCart: 1, gif: "gif2"

    }, {
        name: "name3", icon: "icon3", pokeIndex: 3,
        price: 30, nrOfCopiesInShoppingCart: 0, gif: "gif3"

    }],
    setShopItems: vi.fn(),
    priceOfItemsInBasket: 20, //calculate based on shopitems?
    setPriceOfItemsInBasket: vi.fn(),
    changeNrOfItemsFromCart: vi.fn(),
    setNrOfItemsInBasket: vi.fn(),
}

describe("Cart component", () => {
    it('renders correctly', () => {
        render(<RenderRouteWithOutletContext context={mockOutletContextData}>
            <Cart />
        </RenderRouteWithOutletContext>)
        expect(screen.getByRole('heading', { level: 3 }).textContent).toMatch("Items in your Cart:");
    });

    it('renders items that are in the Shopping Cart', () => {
        render(<RenderRouteWithOutletContext context={mockOutletContextData}>
            <Cart />
        </RenderRouteWithOutletContext>)
        expect(screen.getByText("name2")).toBeInTheDocument();
        expect(screen.queryByText("name1")).not.toBeInTheDocument();
    });

    it('pay button runs emptyCart, which runs setShopItems, setNrOfItemsInBasket and setPriceOfItemsInBasket', async () => {
        const user = userEvent.setup();
        render(<RenderRouteWithOutletContext context={mockOutletContextData}>
            <Cart />
        </RenderRouteWithOutletContext>)
        const payButton = screen.getByText("Pay");
        await user.click(payButton);
        expect(mockOutletContextData.setShopItems).toHaveBeenCalled();
        expect(mockOutletContextData.setNrOfItemsInBasket).toHaveBeenCalledWith(0);
        expect(mockOutletContextData.setPriceOfItemsInBasket).toHaveBeenCalledWith(0);
    });
    //Card component already tested in Card.test.jsx, do not need to test +/-?
    //test priceOfItemsInBasket and all other states directly under App component?
})