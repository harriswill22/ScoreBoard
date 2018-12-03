import React, {
  Component
} from 'react';

import './App.css';
import ScoreCard from './scoreCard';


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
    return (<ScoreCard
    key ={score.id}
    id = {score.id}
    name = {score.name}
    score = {score.score}
    handleClick = {this._incrementScoreByID.bind(this)}
    />
);
    

  });
  return cards;
}


// _incrementScoreByID(id){
//   console.log('Clicked');
//   // find the player in this.state.scores
//   // increment their score
//   const newScores = this.state.scores.map(Will => {
//     if(Will.id !== id){
//       return Will
//     }else{
//       return {
//         id: Will.id,
//         name: Will.name,
//         score: Will.score + 1
//       }
//     }
//   })
//   // call this.setState
//   this.setState({
//     scores: newScores
//   });

// }

// Version 2  map using short to cop
_incrementScoreByID(id){
  console.log('Clicked');
  
  // find the player in this.state.scores
  // increment their score
  const newScores = this.state.scores.map(will =>{
    if (will.id !== id){
      return will;
    }
    else {
      return{
        ...will,
        name: "Rickky",
        score: will.score + 1
      };
    }
  });
  this.setState({
    scores: newScores
  });
}


// Version 3: .map,object copy, + ternary operator return
// using a shorthand to copy values out of the original score
// _incrementScoreByID(id){
//   // find  the player in this.state.scores
//   // increment their score
//   const newScores = this.state.scores.map(harris =>{
//     return harris.id !== id ? harris: {...harris, score: harris.score +1}
//   });
//   this.setState({
//     scores: newScores
//   })
//   // and call their score


// }


}


export default App;