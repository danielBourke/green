import React from "react";
import Button from "..";
import { render, fireEvent, screen, act } from "@testing-library/react";

const handleSubmit = jest.fn();

test("renders the button component", () => {
    const { container } = render(
        <Button >Button</Button>
    );
    fireEvent.click(screen.getByText("Button"));
    expect(container).toMatchSnapshot();
});

test("Button component can be clicked", async () => {
    render(
        <form  onSubmit={handleSubmit}>
            <Button >Button</Button>
        </form>
    );
    await act(async () => {
       await fireEvent.submit(screen.getByText("Button"));
     })
    expect(handleSubmit).toHaveBeenCalled();
});
