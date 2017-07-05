import React from "react";
import { Field, reduxForm } from "redux-form";
import { TextField } from "redux-form-material-ui";
import { RaisedButton as Button } from "material-ui";

const Form = (props) => {
  const { handleSubmit, header } = props;
  return (
    <form name="register" onSubmit={handleSubmit}>
      <h1>{header}</h1>
      <Field
        name="email"
        component={TextField}
        hintText="Email"
        fullWidth
      />
      <Field
        name="password"
        component={TextField}
        hintText="Password"
        type="password"
        fullWidth
      />
      <Button label="Login" primary type="submit" />
    </form>
  );
};

export const RegisterForm = reduxForm({
  form: "register",
})(Form);

export const LoginForm = reduxForm({
  form: "login",
})(Form);
