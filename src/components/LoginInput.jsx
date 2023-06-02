import React from "react";
import PropTypes from 'prop-types';

class LoginInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this)
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onEmailChangeHandler(e) {
    this.setState(() => {
      return {
        email: e.target.value
      }
    })
  }

  onPasswordChangeHandler(e) {
    this.setState(() => {
      return {
        password: e.target.value
      }
    })
  }

  onSubmitHandler(e) {
    e.preventDefault()
    this.props.login({
      email: this.state.email,
      password: this.state.password
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className="login-input">
        <input type="email" placeholder="Email" onChange={this.onEmailChangeHandler} value={this.state.email} />
        <input type="password" placeholder="Password" onChange={this.onPasswordChangeHandler} value={this.state.password} />
        <button>Masuk</button>
      </form>
    )
  }
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired
}

export default LoginInput;
