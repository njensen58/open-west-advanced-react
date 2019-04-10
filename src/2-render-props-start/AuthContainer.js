import React, {Component} from "react"
import AuthForm from "./AuthForm.js"
import Toggle from './shared/Toggle.js'
import Form from './shared/Form.js'

const AuthContainer = () => {
  return (
    <div className="auth-container">
      <Toggle render={({isToggled, toggler}) => 
        <>
          <h1>{isToggled ? "Sign Up" : "Login" }</h1>
          <Form 
            inputs={{ username: "", password: "" }}
            submit={inputs => 
              isToggled 
              ?   alert(`User ${inputs.username} has been created!`)
              :   alert(`User ${inputs.username} has logged in!`)
            }
            render={props => <AuthForm {...props} btnText={isToggled ? "Sign Up" : "Login" }/>}
          />
          <p onClick={toggler}>Already a Member?</p>
        </>
      }/>
    </div>
  )
}

export default AuthContainer
