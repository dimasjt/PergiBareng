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

const TextArea = (props) => {
  return (
    <Field
      name={props.name}
      component={TextField}
      hintText={props.hint}
      fullWidth
      multiLine
      rows={props.rows}
    />
  );
};

InputField.defaultProps = {
  type: "text",
};

TextArea.defaultProps = {
  rows: 1,
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  rows: PropTypes.number,
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export {
  InputField,
  TextArea,
};
