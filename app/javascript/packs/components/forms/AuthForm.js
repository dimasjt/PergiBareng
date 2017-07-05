import React from "react";
import { reduxForm } from "redux-form";
import { RaisedButton as Button } from "material-ui";
import PropTypes from "prop-types";

import { InputField } from "./inputs";

const Form = (props) => {
  const { handleSubmit, header } = props;
  return (
    <form name="register" onSubmit={handleSubmit}>
      <h1>{header}</h1>
      <InputField name="email" hint="Email" />
      <InputField name="password" hint="Password" type="password" />
      <Button label="Login" primary type="submit" />
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
};

export const RegisterForm = reduxForm({
  form: "register",
})(Form);

export const LoginForm = reduxForm({
  form: "login",
})(Form);
