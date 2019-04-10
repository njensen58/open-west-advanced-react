import React, {Component} from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  increment = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }))
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}> + </button>
      </div>
    )
  }
}

export default App