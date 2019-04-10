import React, {Component} from "react"
import {data} from "./friends.json"


class App extends Component {
  constructor(){
    super()
    this.state = {
      isLoggedIn: false,
      friends: []
    }
  }

  login = () => {
    this.setState({
      isLoggedIn: true,
      friends: data
    })
  }

  logout = () => {
    this.setState({
      isLoggedIn: false,
      friends: []
    })
  }

  render(){
    return (
      <div>
        {!this.state.isLoggedIn && (
          <button onClick={this.login}>
            Login
          </button>
        )}
        {this.state.isLoggedIn && (
          <button onClick={this.logout}>Logout</button>
        )}
        <div>
          {this.state.isLoggedIn && <h1>Friend List</h1>}
          {this.state.friends.map((friend, i) => (
            <h1 key={i}>{friend.name}</h1>
          ))}
        </div>
      </div>
    )
  }
}

export default App

