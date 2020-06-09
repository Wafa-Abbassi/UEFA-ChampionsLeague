import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import {Row, Col, Card, Button} from 'reactstrap';
import Round from './Round.js';





// allTeams = [{
//   id: 1,
//   name: 'The Bayern Buttheads',
//   group: 'F',
//   shortName: 'TBB',
//   image: null
// },
// {
//   name: 'manchester',
//   group: 'etc',
//   ...
// }
// ]

class App extends React.Component() {

  constructor(props){
    super(props)
    this.state = {
      round: 0,
      roster: null,
      teams: null,
      images: null,
      lastStandings: null,
      standings: [],
      allStandings: [],
      pairings: [],
      allPairings: []
    }

  }

componentDidMount = () => {

  let byeLosers



  let initRoster = allTeams.map((el, i) => {
    Team(el.teamName, teamImage, el.group)
  })

  this.setState({
    roster: initRoster
  })


}


// doTimeStagger(i) {
//   setTimeout(function() {
    
//   })
// }

tournamentAnimation() {


setTimeout(function() {
  this.nextGroup()
}, 4)


setTimeout(function() {

  this.showCurrent()

}, 8)


setTimeout(function() {
  this.nextGroup()
}, 12)


setTimeout(function() {

  this.showCurrent()

}, 16)




setTimeout(function() {

  this.last16()

}, 16)

setTimeout(function() {

  this.showCurrent()


byeLosers = this.state.roster.slice();

byeLosers.sortBy(function(p) { return [p.group, p.wins, p.differential]})

}, 16)


setTimeout(function() {

  this.last16()

}, 16)

setTimeout(function() {

  this.showCurrent()



byeLosers = this.state.roster.slice();

byeLosers.sortBy(function(p) { return [p.group, p.wins, p.differential]})

}, 16)



setTimeout(function() {

  this.quarterFinalCountdown()

}, 16)

setTimeout(function() {

  this.showCurrent()

}, 16)



setTimeout(function() {

  this.semiFinalCountdown()

}, 16)


setTimeout(function() {

  this.finalCountdown()

}, 16)

setTimeout(function() {

  this.showCurrent()

}, 16)





}


calculateResults = (team1, team2) => {


  let team1Goals = Math.floor(Math.random() * 5)

  let team2Goals = Math.floor(Math.random() * 5)


  if (team2Goals === team1Goals) {
    let tiebreak = Math.floor(Math.random() * 2)

      if (tiebreak > 0) team1Goals +=1 
      else team2Goals +=1

  }

  team1.goals(team1Goals);
  team1.goalsAgainst(team2Goals);
  team2.goals(team2Goals);
  team2.goalsAgainst(team1Goals);

  let theseResults = this.state.allStandings.splice()


  team1.goals > team2.goals ?   theseResults.push(Result(team1, team2, this.state.round)) :     theseResults.push(Result(team2, team1, this.state.round)) 



  this.setState(
    {round: this.state.round+1,
    allStandings: theseResults,
  }
  )

  return [team1, team2]


}



keepResults = () => {


  let showResults = this.state.allResults.splice()

  showResults.sortBy(function(p) {return [p.group]})

  return <table style="width:100%">
  <tr>
    <th>Matchup</th>
    <th>Winner</th>
    <th>Diff</th>
  </tr>
{  showResults.forEach(element => {
    <tr>
      <th>{element.matchName}</th>
      <th>{element.score}</th>
      <th>{element.differential}</th>
    </tr>
  })}
 
</table> 


}

nextGroup() {


let currentRoster = this.state.roster.spice();

let currentPast = this.state.pairings.splice()

let thisGroupPairings = []

currentRoster.sortBy(function(p) {  return [p.group]})


while (currentRoster.length > 0) {


  let thisPairing = []

  thisPairing.push(currentRoster[0], currentRoster[1])


  currentRoster.shift();
  currentRoster.shift();

  thisGroupPairings.push(thisPairing);



}

currentPast.push(thisGroupPairings)

this.setState({
  round: this.state.round+1,
  parings: thisGroupPairings,
  allPairings: currentPast
})


}


  render() {
    return (
      <div className="App">
        <div className="App-header">
      {this.keepResults}
        </div>
      </div>
    );
  }
}

export default App;






// class Standings extends React.Component() {

// constructor(props) {
//   super(props)


// }


// render() {
//   return <>

  

//   </>
// }


// }




////// Hoist deez ///////////////////////////////////////////////////////////////////////////// THESE ARE CONSTRUCTORS THAT THE ABOVE COMPONENTS USE


function Result(winTeam, loseTeam, round) {

  this.matchName = `${winTeam} vs ${loseTeam}`,
  this.winner = winTeam
  this.score = `${winTeam.goals} - ${loseTeam.goals}`
  this.loser = loseTeam
  this.round = round
  this.differential = winTeam.goals - loseTeam.goals
}



function Team(teamName, teamImage, group) { /////////////////////figure out later if a constructor for a state/store piece is a good idea or a bad idea
  this.teamName = teamName;
  this.logo= teamImage;
  this.ready= false;
  this.wins= 0;
  this.losses= 0;
  this.draws= 0;
  this.goals = 0;
  this.goalsAgainst =0;
  this.opponents= [];
  this.group= group;
  this.list1= null;
  this.list2= null;s
  this.addWin= function() {this.wins+=1};
  this.addLoss= function() {this.losses+=1};
  this.addDraw=  function() { this.draws +=1};
  this.addGoals= function(number) { this.goals = this.goals + number};
  this.goalsAgainst = function(numberAgainst) { this.goalsAgainst = this.goalsAgainst + numberAgainst};
  this.displayDifferential = function() {return this.goals - this.goalsAgainst};
  this.currentStanding = group;
  this.changeStanding = function(input) { this.currentStanding = input}
}



(function(){      /////define schwartzian transform here I guess?
  if (typeof Object.defineProperty === 'function' )     {
    try   {
      Object.defineProperty(Array.prototype,'sortBy',{value:sb});
    }
    catch(e)
    {}
  }


  if (!Array.prototype.sortBy) Array.prototype.sortBy = sb;

  function sb(f)         {
    for (let i = this.length; i ;){

      let o = this[--i];
      this[i] = [].concat(f.call(o, o, i), o);
    }

    this.sort(function(a,b){
      for (let i = 0, len = a.length; i < len;  ++i)    {
        if (a[i]!=b[i]) return a[i]<b[i]?-1:1;
      }
      return 0;
    });
    for (let i = this.length; i; )  {
      this[--i]=this[i][this[i].length-1];
    }
    return this;
  }
})();


