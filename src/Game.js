import React, { Component } from "react";

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      point: 0,
      GameOver: false
    };
  }
  onClickplus = (e) => {
      let Addplus =  1
    //   console.log(Addplus)
    //   console.log(this.state.point)
      this.setState({ point: this.state.point + Addplus })
  }

  onClickmoins = (e) => {
    let Addplus =  1
  //   console.log(Addplus)
  //   console.log(this.state.point)
    this.setState({ point: this.state.point - Addplus })
}

onClickreset = (e) => {
    let Addplus =  0
  //   console.log(Addplus)
  //   console.log(this.state.point)
    this.setState({ point: Addplus })
}
  render() {
    return (
      <div>
        <h1>Score : {this.state.point}</h1>
        <button onClick={this.onClickplus}>   +   </button>
        <button onClick={this.onClickmoins}>  -   </button>
        <button onClick={this.onClickreset}>  reset  </button>

      </div>
    );
  }
}

export default Game;
