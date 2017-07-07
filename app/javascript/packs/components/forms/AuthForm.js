import React from "react";
import { reduxForm, propTypes } from "redux-form";
import { RaisedButton as Button } from "material-ui";

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
  ...propTypes,
  header: propTypes.string.isRequired,
};

export const RegisterForm = reduxForm({
  form: "register",
})(Form);

export const LoginForm = reduxForm({
  form: "login",
})(Form);
