import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

describe("App component", () => {
    it("renders correct headings", () => {
        render(<BrowserRouter>
            <App />
        </BrowserRouter>)
        expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/Gotta Buy 'Em All!/i);
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument;
    });


    it("renders correct nr of nav links", () => {
        render(<BrowserRouter>
            <App />
        </BrowserRouter>)
        expect(screen.getByRole('navigation').children.length).toBe(3);
    })

    it("addToCart adds a pokemon to cart successfully", () => {
        render(<BrowserRouter>
            <App />
        </BrowserRouter>)
           
    })

    //have decided not to test functions such as addToCart/removeFromCart/etc, this seems like testing implementation details https://kentcdodds.com/blog/avoid-the-test-user
    //instead I am testing how user interacts with app, e.g. in Card component I test that the functions are called, and that they change values visually on screen.
});