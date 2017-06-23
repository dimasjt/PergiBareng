import React from "react";
import { Field } from "redux-form";
import PropTypes from "prop-types";
import { TextField } from "redux-form-material-ui";

const InputField = (props) => {
  return (
    <Field
      name={props.name}
      component={TextField}
      hintText={props.hint}
      fullWidth
    />
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
};

export {
  InputField,
};
