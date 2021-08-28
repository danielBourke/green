import React from "react";

const Button = ({ children, type, disabled, isSubmitting }) => (
  <button className="button" disabled={disabled} type={type}>
    {isSubmitting ? "submitting" : children}
  </button>
);

export default Button;
