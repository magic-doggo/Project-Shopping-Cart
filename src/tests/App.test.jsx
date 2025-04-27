import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

describe("App component", () => {
    it("renders correct heading", () => {
        render(<BrowserRouter>
            <App />
        </BrowserRouter>)
        expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/Gotta Buy 'Em All!/i);
    });
});