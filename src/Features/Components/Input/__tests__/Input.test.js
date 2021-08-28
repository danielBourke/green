import React from "react";
import Input from "../";
import { render, fireEvent, act } from "@testing-library/react";
import { Formik } from "formik";

it("check box component should be able to be toggled", () => {
    const { getByTestId } = render(
        <Formik initialValues={{ email: "", rememberMe: false }} >
            <Input name="rememberMe" label="Remember this device" />
        </Formik>
    );
    const input = getByTestId("input");
    act(() => {
        fireEvent.change(input, { target: { value: "email@gmail.com" } });
    })
    expect(input.value).toBe("email@gmail.com");
});
