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
      type={props.type}
    />
  );
};

InputField.defaultProps = {
  type: "text",
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export {
  InputField,
};
