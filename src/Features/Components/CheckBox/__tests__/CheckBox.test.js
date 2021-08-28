import React from "react";
import Checkbox from "../";
import { render, fireEvent, act } from "@testing-library/react";
import { Formik } from "formik";

it("check box component should be able to be toggled", async () => {
    const { getByTestId } = render(
        <Formik initialValues={{ email: "", rememberMe: false }} >
            <Checkbox name="rememberMe" label="Remember this device" />
        </Formik>
    );
    const checkbox = getByTestId("checkbox");
    expect(checkbox.checked).toEqual(false);
    await act(async () => {
       await fireEvent.click(checkbox);
    })
    expect(checkbox.checked).toEqual(true);
});
