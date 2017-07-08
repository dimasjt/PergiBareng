import React from "react";
import { reduxForm, propTypes } from "redux-form";
import { RaisedButton as Button } from "material-ui";
import { connect } from "react-redux";

import { InputField, FileField } from "./inputs";

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
  const { handleSubmit } = props;
  return (
    <form name="editProfile" onSubmit={handleSubmit} style={styles.form}>
      <h1 style={styles.heading}>Update Profile</h1>
      <InputField name="email" hint="Email" />
      <InputField name="name" hint="Full Name" />
      <InputField name="city" hint="City" />
      <InputField name="birthdate" hint="Birthdate" />
      <br /><br />
      <FileField name="avatar" />
      <InputField name="current_password" hint="Current Password" type="password" />

      <Button label="Update" primary type="submit" />
    </form>
  );
};

Form.propTypes = {
  ...propTypes,
};

const FormRedux = reduxForm({
  form: "editProfile",
})(Form);

const EditProfile = connect(
  state => ({
    initialValues: state.user,
  }),
)(FormRedux);

export default EditProfile;
