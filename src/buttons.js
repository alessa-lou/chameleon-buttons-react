import React, { Component } from 'react'
import Text from './Text'
class Buttons extends Component {
  constructor(props) {
    super(props)
    this.state = {currentColour: "white"}
  }
  changeToRed = () => {
    this.setState({currentColour: "red"})
  }
  changeToBlue = () => {
    this.setState({currentColour: "blue"})
  }
  changeToGreen = () => {
    this.setState({currentColour: "green"})
  }
  render() {
    return(
      <div className="change-to-red">
        <button onClick={this.changeToRed}>Change to red</button>
        <button onClick={this.changeToBlue}>Change to blue</button>
        <button onClick={this.changeToGreen}>Change to green</button>
        <Text colour={this.state.currentColour}/>
      </div>
    )
  }
}
export default Buttons
