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

InputField.defaultProps = {
  type: "text",
  validate: [],
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  validate: PropTypes.any,
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

const FileInput = ({
  input: {
    value: omitValue,
    onChange,
    onBlur,
    ...inputProps
  },
  meta: omitMeta,
  ...props
}) => {
  const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

  return (
    <input
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type="file"
      {...inputProps}
      {...props}
    />
  );
};

FileInput.propTypes = {
  meta: PropTypes.any.isRequired,
  input: PropTypes.any.isRequired,
};

const FileField = (props) => {
  return (
    <Field
      component={FileInput}
      name={props.name}
    />
  );
};

FileField.propTypes = {
  name: PropTypes.string.isRequired,
};

export {
  InputField,
  TextArea,
  FileField,
};
