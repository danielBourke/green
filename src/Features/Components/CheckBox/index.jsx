import React from "react";
import { Field } from "formik";

const Checkbox = ({ label, name }) => (
  <div className="checkbox">
    <label>
      <Field  data-testid="checkbox" type="checkbox" name={name} />
      <span>{label}</span>
    </label>
  </div>
);

export default Checkbox;
