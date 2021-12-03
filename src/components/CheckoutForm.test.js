import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";
// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);

});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const headingCheckout = screen.getByText("Checkout Form");
    const firstNameInput = screen.getByLabelText("First Name:");
    const lastNameInput = screen.getByLabelText("Last Name:");
    const addressInput = screen.getByLabelText("Address:");
    const cityInput = screen.getByLabelText("City:");
    const stateInput = screen.getByLabelText("State:");
    const zipInput = screen.getByLabelText("Zip:");
    const checkoutButton = screen.getByRole("button");

    userEvent.type(firstNameInput, "Lorem");
    userEvent.type(lastNameInput, "Ipsum");
    userEvent.type(addressInput, "42 Dolor Ave");
    userEvent.type(cityInput, "Sept City");
    userEvent.type(stateInput, "WA");
    userEvent.type(zipInput, "00000");
    userEvent.click(checkoutButton);

    const firstNameText = screen.getByText(/Lorem/);
    const lastNameText = screen.getByText(/Ipsum/);
    const addressText = screen.getByText(/42 Dolor Ave/);
    const cityText = screen.getByText(/Sept City/);
    const stateText = screen.getByText(/WA/);
    const zipText = screen.getByText(/00000/);

    expect(headingCheckout).toBeInTheDocument();
    expect(firstNameText).toBeInTheDocument();
    expect(lastNameText).toBeInTheDocument();
    expect(addressText).toBeInTheDocument();
    expect(cityText).toBeInTheDocument();
    expect(stateText).toBeInTheDocument();
    expect(zipText).toBeInTheDocument();
});
