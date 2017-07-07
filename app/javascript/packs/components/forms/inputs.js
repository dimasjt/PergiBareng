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
      validate={props.validate}
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
      validate={props.validate}
    />
  );
};

InputField.defaultProps = {
  type: "text",
  validate: [],
};

TextArea.defaultProps = {
  rows: 1,
  validate: [],
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  rows: PropTypes.number,
  validate: PropTypes.any,
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  validate: PropTypes.any,
};

export {
  InputField,
  TextArea,
};
