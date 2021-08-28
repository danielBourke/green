import React from "react";
import SignInForm from "../";
import { render, fireEvent, act, screen } from "@testing-library/react";

it("SignInform should be able to be submitted", async () => {
    const { getByTestId } = render(
        <SignInForm />
    );
    const input = getByTestId("input");
    await act(async () => {
        fireEvent.change(input, { target: { value: "email@gmail.com" } });
    })
    expect(input.value).toBe("email@gmail.com");
});

it("Signin form should display errors correctly if incorrect email is inputed", async () => {
    const { getByTestId, getByText } = render(
        <SignInForm />
    );
    const input = getByTestId("input");
    await act(async () => {
        await fireEvent.change(input, { target: { value: "emaiom" } });
    })
    await act(async () => {
        await fireEvent.submit(screen.getByText("Sign in"));
    })
    expect(getByText("Invalid email")).toBeInTheDocument();
});
