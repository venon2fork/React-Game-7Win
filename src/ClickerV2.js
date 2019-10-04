import React, { Component } from 'react'

export class ClickerV2 extends Component {
//REFACTO     // constructor(props) {
//REFACTO     //     super(props)
//REFACTO    // this.state = {
        state = {
             num: 0,
             nberEssai: 0
        }
//REFACTO  // this.getNumberRandom = this.getNumberRandom.bind(this);
//REFACTO    // }
//REFACTO // getNumberRandom (){
    getNumberRandom = e =>{
        let nbr2 = 1
        // generer un nombre aleatoire entre 1 et 10
        let rand = Math.floor(Math.random()* 10)+1
        // console.log(rand)
        this.setState({ num : rand, isWinner : rand === 7 , nberEssai: this.state.nberEssai + nbr2})
        console.log(this.state.nberEssai)
    }
    render() {
        const {nberEssai,num} = this.state
        let btn;
        let nbrch;
        if (num !== 7 && nberEssai !== 10){
            btn= <button onClick={this.getNumberRandom}>Click</button>
            nbrch = <h4>Number of chances  : {nberEssai} </h4>
        } else if(nberEssai === 10) {
            btn= <h1>You Loose</h1>
        }else {
            btn= <h1>You Win</h1>
        }
        return (
            <div>
            <h1>Number : {num}</h1>
            {btn} {nbrch}
            </div>
        )
    }
}

export default ClickerV2
