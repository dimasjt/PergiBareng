import React from "react";
import { reduxForm } from "redux-form";
import { RaisedButton as Button } from "material-ui";
import PropTypes from "prop-types";

import { InputField } from "./inputs";

const Form = (props) => {
  return (
    <form name="editProfile" onSubmit={props.onSubmit}>
      <h1>Update Profile</h1>
      <InputField name="email" hint="Email" />
      <InputField name="name" hint="Full Name" />
      <InputField name="city" hint="City" />
      <InputField name="birthdate" hint="Birthdate" />

      <Button label="Update" primary type="submit" />
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: "editProfile",
})(Form);
