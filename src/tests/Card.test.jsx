import Card from "../components/Card";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Card Component", () => {
    it("renders correctly based on props", () => {
        render(<BrowserRouter>
            <Card
                imageURL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                name="bulbasaur"
                price={45}
                nrOfCopiesInShoppingCart={0}
                id={1}
            />
        </BrowserRouter>)
        expect(screen.getByAltText("image of pokemon for sale")).toBeInTheDocument();
        expect(screen.getByText("bulbasaur")).toBeInTheDocument();
        expect(screen.getByText(/45/)).toBeInTheDocument();
        expect(screen.getByText("Add to Cart")).toBeInTheDocument();
    });

    it("renders conditional elements based on props when the item is in cart", () => {
        render(<BrowserRouter>
            <Card
                imageURL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                name="bulbasaur"
                price={45}
                nrOfCopiesInShoppingCart={2}
                id={1}
            />
        </BrowserRouter>)
        expect(screen.getByAltText("image of pokemon for sale")).toBeInTheDocument();
        expect(screen.getByText("bulbasaur")).toBeInTheDocument();
        expect(screen.getByText(/45/)).toBeInTheDocument();
        expect(screen.getByDisplayValue(2)).toBeInTheDocument();
        expect(screen.getByText("-")).toBeInTheDocument();
        expect(screen.getByText("+")).toBeInTheDocument();

    });

    // it("should call the addToCart function when 'Add to Cart' button is clicked and add value to desiredNrOfCopies in state", async () => {
    //     const addToCart = vi.fn();
    //     const user = userEvent.setup();
    //     render(<BrowserRouter>
    //         <Card
    //             imageURL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    //             name="bulbasaur"
    //             price={45}
    //             nrOfCopiesInShoppingCart={0}
    //             id={1}
    //             addToCart={addToCart}
    //         />
    //     </BrowserRouter>)
    //     const button = screen.getByRole("button", { name: "Add to Cart" });
    //     waitForElementToBeRemoved(screen.getByRole("button", { name: "Add to Cart" })).then(() =>   console.log('Element no longer in DOM'),)
    //     await user.click(button);
    //     expect(addToCart).toHaveBeenCalled();

    //     await waitFor(() => expect(screen.findByRole('spinbutton')).toHaveValue(1))
    //     //why not finding spinbuttonm regardless of whether i use waitforelementtoberemoved
    // });

    it("should call the addToCart functions when '+' button is clicked and increase desiredNrOfCopiesInCart state value", async () => {
        const addToCart = vi.fn();
        const user = userEvent.setup();
        render(<BrowserRouter>
            <Card
                imageURL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                name="bulbasaur"
                price={45}
                nrOfCopiesInShoppingCart={2}
                id={1}
                addToCart={addToCart}
            />
        </BrowserRouter>)
        const inputElement = screen.getByRole('spinbutton');
        const button = screen.getByRole("button", { name: "+" });
        await user.click(button);
        expect(addToCart).toHaveBeenCalled();
        expect(inputElement).toHaveValue(3);
    });

    it("should call the removeFromCart function when '-' button is clicked and decrease DesiredNrOfCOpiesInCart state value", async () => {
        const removeFromCart = vi.fn();
        const user = userEvent.setup();
        render(<BrowserRouter>
            <Card
                imageURL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                name="bulbasaur"
                price={45}
                nrOfCopiesInShoppingCart={2}
                id={1}
                removeFromCart={removeFromCart}
            />
        </BrowserRouter>)
        const inputElement = screen.getByRole('spinbutton');
        const button = screen.getByRole("button", { name: "-" });
        await user.click(button);
        expect(removeFromCart).toHaveBeenCalled();
        expect(inputElement).toHaveValue(1);
    });

    it("should call the changeNrOfItemsFromCart on blur", async () => {
        const changeNrOfItemsFromCart = vi.fn();
        const user = userEvent.setup();
        render(<BrowserRouter>
            <Card
                imageURL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                name="bulbasaur"
                price={45}
                nrOfCopiesInShoppingCart={2}
                id={1}
                changeNrOfItemsFromCart={changeNrOfItemsFromCart}
            />
        </BrowserRouter>)

        const inputElement = screen.getByRole('spinbutton');
        await user.type(inputElement, '2');
        const anyOtherElement = screen.getByAltText("image of pokemon for sale");
        await user.click(anyOtherElement);//https://testing-library.com/docs/guide-events/ trick to simulate blur
        expect(changeNrOfItemsFromCart).toHaveBeenCalled();
    });

});