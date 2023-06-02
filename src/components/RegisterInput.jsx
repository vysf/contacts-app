import React from "react";
import PropTypes from 'prop-types';

class RegisterInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
    }

    this.onNameChange = this.onNameChange.bind(this)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onNameChange(e) {
    this.setState(() => {
      return {
        name: e.target.value
      }
    })
  }

  onEmailChange(e) {
    this.setState(() => {
      return {
        email: e.target.value
      }
    })
  }

  onPasswordChange(e) {
    this.setState(() => {
      return {
        password: e.target.value
      }
    })
  }

  onSubmitHandler(e) {
    e.preventDefault()
    this.props.register({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className="register-input">
        <input type="text" placeholder="Nama" onChange={this.onNameChange} value={this.state.name} />
        <input type="email" placeholder="Email" onChange={this.onEmailChange} value={this.state.email} />
        <input type="password" placeholder="Password" autoComplete="current-password" onChange={this.onPasswordChange} value={this.state.password} />
        <button>Register</button>
      </form>
    )
  }
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
}

export default RegisterInput;