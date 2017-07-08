import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import { TextField } from "redux-form-material-ui";

class InputField extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    hint: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    validate: PropTypes.any,
  }
  static defaultProps = {
    type: "text",
    validate: [],
  }
  render() {
    const props = this.props;
    return (
      <Field
        name={props.name}
        component={TextField}
        hintText={props.hint}
        fullWidth
        type={props.type}
        validate={props.validate}
        floatingLabelText={props.hint}
      />
    );
  }
}

export default InputField;
