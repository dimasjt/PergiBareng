import React from "react";
import { reduxForm } from "redux-form";
import { RaisedButton as Button } from "material-ui";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { InputField } from "./inputs";

const styles = {
  heading: {
    padding: 0,
    margin: 0,
  },
  form: {
    padding: "20px",
  },
};

const Form = (props) => {
  return (
    <form name="editProfile" onSubmit={props.onSubmit} style={styles.form}>
      <h1 style={styles.heading}>Update Profile</h1>
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

const EditProfile = reduxForm({
  form: "editProfile",
})(Form);

export default connect(
  state => ({
    initialValues: state.user,
  }),
)(EditProfile);
