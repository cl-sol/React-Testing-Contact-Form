import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import ContactForm from "./ContactForm";

test("render form", () => {
    render(<ContactForm />);
})

test('for form labels', () => {
    const {getByLabelText} = render(<ContactForm/>)

    getByLabelText(/firstName/i);
    getByLabelText(/lastName/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);
})

test('form submit', () => {
    const {getByTestId} = render(<ContactForm/>)

    const firstNameInput = getByTestId(/First Name*/i)
    const lastNameInput = getByTestIdgetByLabelText(/Last Name*/i)
    const emailInput =  getByTestId(/email/i)
    const message = getByTestIdgetByLabelText(/message/i)

})

test('changing inputs', () => {
    const {getByTextId} = render(<ContactForm/>)

    const firstNameInput = getByTestId(/first Name*/)
    const lastNameInput = getByTestId(/last Name*/)
    const emailInput = getByTestId(/email*/)
    const messageInput = getByTestId(/message/)

    fireEvent.change(firstNameInput, {target: { value: "Claudia" },}); 
    expect(firstNameInput.value).toBe("Claudia");

    fireEvent.change(firstNameInput, {target: { value: "Sol" },}); 
    expect(firstNameInput.value).toBe("Sol");

    fireEvent.change(emailInput, {target: { value: "hello@hello.com" },});
    expect(emailInput.value).toBe("hello@hello.com");

    fireEvent.change(emailInput, {target: { value: "This is a test" },});
    expect(emailInput.value).toBe("This is a test");
})