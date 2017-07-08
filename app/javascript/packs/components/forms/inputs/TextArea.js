import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import { TextField } from "redux-form-material-ui";

class TextArea extends React.Component {
  static defaultProps = {
    rows: 1,
    validate: [],
  }
  static propTypes = {
    name: PropTypes.string.isRequired,
    hint: PropTypes.string.isRequired,
    rows: PropTypes.number,
    validate: PropTypes.any,
  }
  render() {
    const { props } = this;
    return (
      <Field
        name={props.name}
        component={TextField}
        hintText={props.hint}
        fullWidth
        multiLine
        rows={props.rows}
        validate={props.validate}
        floatingLabelText={props.hint}
      />
    );
  }
}

export default TextArea;
