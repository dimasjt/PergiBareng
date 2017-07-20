import React, { Component } from "react"
import { Paper } from "material-ui"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import PropTypes from "prop-types"
import { graphql, compose } from "react-apollo"

import * as actions from "../../actions/auth"
import { register, login } from "../../mutations/auth"

import { RegisterForm, LoginForm } from "../forms/AuthForm"

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
}

class AuthPage extends Component {
  static propTypes = {
    register: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
  }
  render() {
    return (
      <div style={styles.container}>
        <Paper zDepth={1} style={styles.wrapper}>
          <RegisterForm
            header="Register"
            onSubmit={(values) => { this.props.register(values) }}
          />
        </Paper>

        <Paper zDepth={1} style={styles.wrapper}>
          <LoginForm
            header="Login"
            onSubmit={(values) => { this.props.login(values) }}
          />
        </Paper>
      </div>
    )
  }
}

const withMutation = compose(
  graphql(register, {
    props: ({ mutate }) => ({
      register: (values) => {
        mutate({ variables: { ...values } })
      },
    }),
  }),
  graphql(login, {
    props: ({ mutate }) => ({
      login: (values) => {
        mutate({ variables: { ...values } })
      },
    }),
  }),
)

export default withMutation(connect(
  (state) => state,
  (dispatch) => ({ actions: bindActionCreators(actions, dispatch) }),
)(AuthPage))
