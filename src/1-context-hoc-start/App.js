import React, {Component} from "react"
import List from "./List.js"
import ListButton from "./ListButton.js"
import {data} from "./data.json"

class App extends Component {
  constructor() {
    super()
    this.state = {
      listData: []
    }
  }

  getData = () => {
    const listData = data
    this.setState({
      listData
    })
  }

  render() {
    return (
      <div className="app-container">
        <ListButton getData={this.getData} />
        <List listData={this.state.listData} />
      </div>
    )
  }
}

export default App
