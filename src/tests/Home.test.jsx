import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../components/Home";
import RenderRouteWithOutletContext from "../components/RenderRouteWithOutletContext";

const mockOutletContextData = {
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
}

describe("Home component", () => {
    it("renders correctly", () => {
        render(<RenderRouteWithOutletContext context={mockOutletContextData}>
            <Home />
        </RenderRouteWithOutletContext>)
        expect(screen.getByRole('heading', { level: 3 }).textContent).toMatch('Welcome to the Poke shop! Top quality, non-GMO Pokemon delivered straight to your doorstep.');
    })
})
//what else to test? HomePageCard is already tested separately