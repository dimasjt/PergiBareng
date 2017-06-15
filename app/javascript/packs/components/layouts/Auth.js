import React, { Component } from "react";
import { Paper, RaisedButton as Button } from "material-ui";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { TextField } from "redux-form-material-ui";

import * as actions from "../../actions/auth";

const styles = {
  container: {
    width: "90%",
    margin: "0 auto",
    textAlign: "center",
  },
  wrapper: {
    padding: 20,
    margin: 30,
    width: "40%",
    display: "inline-block",
    textAlign: "left",
  },
};

const Form = (props) => {
  const { handleSubmit, submitting, header } = props;
  return (
    <form name="register" onSubmit={handleSubmit}>
      <h1>{header}</h1>
      <Field
        name="email"
        component={TextField}
        hintText="Email"
        fullWidth
      />
      <Field
        name="password"
        component={TextField}
        hintText="Password"
        type="password"
        fullWidth
      />
      <Button label="Login" primary type="submit" />
    </form>
  )
}

const RegisterForm = reduxForm({
  form: 'register',
})(Form);

const LoginForm = reduxForm({
  form: 'login',
})(Form);

class Auth extends Component {
  registerUser = (values) => {
    this.props.actions.registerUser(values);
  }
  render() {
    return (
      <div style={styles.container}>
        <Paper zDepth={1} style={styles.wrapper}>
          <RegisterForm header="Register" onSubmit={this.registerUser} />
        </Paper>

        <Paper zDepth={1} style={styles.wrapper}>
          <LoginForm header="Login" />
        </Paper>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Auth);
