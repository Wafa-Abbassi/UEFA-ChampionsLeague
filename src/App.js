import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';s
import {Row, Col, Card, Button} from 'reactstrap';




allTeams = [{
  name: 'The Bayern Buttheads',
  group: 'F',
  shortName: 'TBB',
  image: null
},
{
  name: 'manchester',
  group: 'etc',
  ...
}
]

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
      allStandings: []

    }

  }

componentDidMount = () => {



  let initRoster = allTeams.map((el, i) => {
    Team(el.teamName, teamImage, el.group)
  })

  this.setState({
    roster: initRoster
  })


}


calculateResults = (team1, team2) => {


  let team1Goals = Math.floor(Math.random() * 5)

  let team2Goals = Math.floor(Math.random() * 5)

  team1.goals(team1Goals);
  team1.goalsAgainst(team2Goals);
  team2.goals(team2Goals);
  team2.goalsAgainst(team1Goals)

  return [team1, team2]


}

nextGroup() {

let currentRoster = this.state.roster.spice()


}


  render() {
    return (
      <div className="App">
        <div className="App-header">
s</div>
      </div>
    );
  }
}

export default App;




////// Hoist deez





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


