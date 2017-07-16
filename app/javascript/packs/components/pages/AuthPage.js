import React, { Component } from "react"
import { Paper } from "material-ui"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import PropTypes from "prop-types"
import { graphql, gql } from "react-apollo"

import * as actions from "../../actions/auth"

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
    actions: PropTypes.any.isRequired,
  }
  registerUser = (values) => {
    this.props.register({ values })
    // this.props.actions.registerUser(values)
  }
  loginUser = (values) => {
    this.props.actions.loginUser(values)
  }
  render() {
    return (
      <div style={styles.container}>
        <Paper zDepth={1} style={styles.wrapper}>
          <RegisterForm header="Register" onSubmit={this.registerUser} />
        </Paper>

        <Paper zDepth={1} style={styles.wrapper}>
          <LoginForm header="Login" onSubmit={this.loginUser} />
        </Paper>
      </div>
    )
  }
}

const registerMutation = gql`
  mutation register($user: RegisterUser!) {
    register(user: $user) {
      auth_token
    }
  }
`

const withMutation = graphql(registerMutation, {
  props: ({ mutate }) => ({
    register: ({ email, password }) => {
      mutate({ variables: { email, password } })
    },
  }),
})

export default withMutation(connect(
  (state) => state,
  (dispatch) => ({ actions: bindActionCreators(actions, dispatch) }),
)(AuthPage))
