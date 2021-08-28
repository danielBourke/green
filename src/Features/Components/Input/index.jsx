import React from "react";
import { Field } from "formik";

const Input = ({ error, inputType, name, touched, handleChange, value, label }) => (
  <div name={name} className="Input">
    <label>{label}</label>
    <Field
      data-testid="input"
      className="Input__field"
      type={inputType}
      name={name}
      onChange={handleChange}
      value={value}
    />
    <p className="error">{error && touched && error}</p>
  </div>
);

export default Input;
