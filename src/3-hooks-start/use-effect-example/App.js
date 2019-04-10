import React, {Component} from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      color: "blue"
    }
  }

  componentDidMount(){
    window.addEventListener("keydown", this.selectColor)
  }

  componentWillUnmount(){
    window.removeEventListener("keydown", this.selectColor)
  }

  selectColor = (e) => {
    if(e.which === 82){
      this.setState({color: "red"})
    } else if(e.which === 66){
      this.setState({color: "blue"})
    } else if(e.which === 71){
      this.setState({color: "green"})
    } else if(e.which === 89){
      this.setState({color: "yellow"})
    }
  }

  render() {
    return (
      <div style={{width: 300, height: 300, backgroundColor: this.state.color}}>
          
      </div>
    )
  }
}

export default App