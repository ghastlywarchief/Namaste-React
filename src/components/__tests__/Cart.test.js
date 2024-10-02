import "@testing-library/jest-dom"
import { getByDisplayValue, getByText, render, screen } from "@testing-library/react"
import Cart from "../Cart";
import { Provider } from "react-redux";
import ReduxStore from "../../utils/ReduxStore";

it("Should load a button on screen", () => {
    render(
        <Provider store={ReduxStore}>
            <Cart />
        </Provider>
    );
    const numOfButtons = screen.getAllByRole("button");
    expect(numOfButtons.length).toBe(1);
})

it("Should load the Clear Cart button on screen", () => {
    render(
        <Provider store={ReduxStore}>
            <Cart />
        </Provider>
    );
    const text = screen.getByText("Clear Cart");
    expect(text).toBeInTheDocument();
})