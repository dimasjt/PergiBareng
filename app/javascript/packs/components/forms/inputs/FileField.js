import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";

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

export default FileField;
