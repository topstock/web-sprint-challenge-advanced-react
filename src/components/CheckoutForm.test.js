import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);

});

test("shows success message on submit with form details", () => {

    const headerReactPlants = screen.getByText("React Plants");
    const headerIcon = screen.getByRole("img");
    const navBarPlants = screen.getByText(" Plants");
    const navBarCart = screen.getByText("Cart");
    const headingCheckout = screen.getByText("Checkout Form");
    const allInputs = screen.getAllByRole("input");
    const firstNameInput = allInputs[0];
    const lastNameInput = allInputs[1];
    const addressInput = allInputs[2];
    const cityInput = allInputs[3];
    const stateInput = allInputs[4];
    const zipInput = allInputs[5];
    const checkoutButton = screen.getByRole("button");

    userEvent.type(firstNameInput, "Lorem");
    userEvent.type(lastNameInput, "Ipsum");
    userEvent.type(addressInput, "42 Dolor Ave");
    userEvent.type(cityInput, "Sept City");
    userEvent.type(stateInput, "WA");
    userEvent.type(zipInput, "00000");
    userEvent.click(checkoutButton);

    const firstNameText = screen.getByText("Lorem");
    const lastNameText = screen.getByText("Ipsum");
    const addressText = screen.getByText("42 Dolor Ave");
    const cityText = screen.getByText("Sept City");
    const stateText = screen.getByText("WA");
    const zipText = screen.getByText("00000");

    expect(firstNameText).toBeInTheDocument();
    expect(lastNameText).toBeInTheDocument();
    expect(addressText).toBeInTheDocument();
    expect(cityText).toBeInTheDocument();
    expect(stateText).toBeInTheDocument();
    expect(zipText).toBeInTheDocument();

});
