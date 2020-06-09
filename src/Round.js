import React from 'React'
import teamImage from '../images/UEFa_cup_logo_new.png'





export default class Round extends React.Component() {

    constructor(props) {
        super(props)

    }

    render() {
        return <>
        {props.roundPairings.forEach((el, i) => {
        return <Matchup pairing={el} />
    })}

</>
    }
   




}


class Matchup extends React.Component() {
constructor(props) {
    super(props)
}

    render() {
        return    <tbody class="tournament-bracket__content">
                {props.pairing.forEach((el, i => {
                    return <Guy guy={el}/>
                }))}
            </tbody>
   
}
}


class Guy extends React.Component() {

    constructor(props) {
        super(props)
    }



    render() {
        return (<>

      <tr>
        <th>Team</th>
        <th>Score</th>
      </tr> 
    <tr class="tournament-bracket__team tournament-bracket__team--winner">
        <td class="tournament-bracket__country">
          <abbr class="tournament-bracket__code" title="Czech Republic">{props.guy.teamName}</abbr>
          <span class="tournament-bracket__flag flag-icon flag-icon-cz" aria-label="Flag"><img src={teamLogo} /></span>
        </td>
        <td class="tournament-bracket__score">
          <span class="tournament-bracket__number">{props.guy.goals}</span>
        </td>
      </tr></>
)
    }
}


