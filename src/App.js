import React, {
  Component
} from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  
  // set up state
  this.state = {
    scores: [
      {
        id: 1,
        name: "Will",
        score: 10
      },
      {
        id: 2,
        name: "Rick",
        score: 13
      },
      {
        id: 3,
        name: "Dan",
        score: 18
      }
    ]
  }
}
render() {
  return ( 
    <div className = "App">
    <h1> Score Board App </h1> 
    <div className = "score-container"> {this._scoreAsCards()}</div>
    </div>
  );
}
_scoreAsCards(){
  const cards = this.state.scores.map(score => {
    return (
      <div key ={score.id}>
        <h2>Name {score.name} // Score: {score.score}</h2>
        <button onClick={() => this._incrementScoreByID(score.id)}> + </button>
      </div>
    )
  });
  return cards;
}


_incrementScoreByID(id){
  console.log('Clicked');
  // find the player in this.state.scores
  // increment their score
  const newScores = this.state.scores.map(Will => {
    if(Will.id !== id){
      return Will
    }else{
      return {
        id: Will.id,
        name: Will.name,
        score: Will.score + 1
      }
    }
  })
  // call this.setState
  this.setState({
    scores: newScores
  });

}

}


export default App;