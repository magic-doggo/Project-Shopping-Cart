import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePageCard from "../components/HomePageCard";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";


describe("HomePageCard", () => {
    const shopItem = {
        gif: 'path/to/gif.gif',
        icon: 'path/to/icon.png',
    };

    it("renders correctly showing icon", () => {
        render(<HomePageCard shopItem={shopItem} />);
        expect(screen.getByAltText('pokemon icon')).toBeInTheDocument();
    })

    it("shows gif on Hover, and hides gif on unhover", async () => {
        render(<HomePageCard shopItem={shopItem} />);
        userEvent.hover(screen.getByAltText('pokemon icon'))
        expect(await screen.findByAltText('pokemon gif')).toBeInTheDocument();
        userEvent.unhover(screen.getByAltText('pokemon gif'));
        await new Promise ((r) => setTimeout(r, 1200))
        expect(screen.queryByAltText('pokemon gif')).not.toBeInTheDocument();
    })

 
})