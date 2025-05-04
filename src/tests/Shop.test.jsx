import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import RenderRouteWithOutletContext from "../components/RenderRouteWithOutletContext";
import Shop from "../components/Shop";

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


describe("Shop component", () => {
    it("renders correctly", () => {
        render(<RenderRouteWithOutletContext context={mockOutletContextData}>
            <Shop />
        </RenderRouteWithOutletContext>)
        expect(screen.getByRole('heading', { level: 3 }).textContent).toMatch('Shop Page');

    })

    it("renders all shop items", () => {
        render(<RenderRouteWithOutletContext context={mockOutletContextData}>
            <Shop />
        </RenderRouteWithOutletContext>)
        expect(screen.getByText("name1")).toBeInTheDocument();
        expect(screen.getByText("name2")).toBeInTheDocument();
        expect(screen.getByText("name3")).toBeInTheDocument();
    })
})

//test context only in the App component
