import React, { Component } from 'react';
import MVCICharacterCard from './MVCICharacterCard'
import MVCIEditTeam from './MVCIEditTeam'
import styled from 'styled-components'
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';

const TeamStyle = styled.div`
    display: flex;
    justify-content: space-around;
`

const TitleStyle = styled.div`
    text-align: center
`

const TeamContainer = styled.div`
    border-style: solid;
    ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
    }
`

class MVCITeamCard extends Component {

    state = {
        editToggle: false
    }

    changeEditToggle = () => {
        this.setState({ editToggle: !this.state.editToggle })
    }

    deleteTeam = async () => {
        try {
            await axios.delete(`/api/${this.props.player._id}/mvciteams/${this.props.team._id}/delete`)
            this.props.updatingTeams()
        } catch (error) {
            console.log(error)
        }
    }

    infinityStonePicture = (stone) => {
        if (stone === "Reality Stone") {
            return <img className="stonePic" src="https://vignette.wikia.nocookie.net/marvelvscapcom/images/7/73/RealityStone.png/revision/latest?cb=20170912201248" alt={stone}/>
        } else if (stone === "Power Stone") {
            return <img className="stonePic" src="https://vignette.wikia.nocookie.net/marvelvscapcom/images/2/20/PowerStone.png/revision/latest?cb=20170912202830" alt={stone}/>
        } else if (stone === "Space Stone") {
            return <img className="stonePic" src="https://vignette.wikia.nocookie.net/marvelvscapcom/images/8/86/SpaceStone.png/revision/latest?cb=20170912202905" alt={stone}/>
        } else if (stone === "Time Stone") {
            return <img className="stonePic" src="https://vignette.wikia.nocookie.net/marvelvscapcom/images/8/8f/TimeStone.png/revision/latest?cb=20170912202846" alt={stone}/>
        } else if (stone === "Mind Stone") {
            return <img className="stonePic" src="https://vignette.wikia.nocookie.net/marvelvscapcom/images/8/82/MindStone.png/revision/latest?cb=20170912202947" alt={stone}/>
        } else if (stone === "Soul Stone") {
            return <img className="stonePic" src="https://vignette.wikia.nocookie.net/marvelvscapcom/images/8/80/SoulStone.png/revision/latest?cb=20170912202924" alt={stone}/>
        }
    }

    render() {
        return (
            <TeamContainer>
                <TitleStyle>
                    <h2>- {this.props.team.nickname} -</h2>
                </TitleStyle>
                <TeamStyle>
                    <MVCICharacterCard character={this.props.team.characterOne[0]} />
                    <MVCICharacterCard character={this.props.team.characterTwo[0]} />
                </TeamStyle>
                {this.infinityStonePicture(this.props.team.infinityStone)}
                <ul>
                    {this.state.editToggle ? <li><RaisedButton label="Cancel" onClick={this.changeEditToggle} /></li> : 
                    <li><RaisedButton label="Edit Team" onClick={this.changeEditToggle} /></li>}
                    <li><RaisedButton label="Remove Team" onClick={this.deleteTeam} /></li>
                </ul>
                {this.state.editToggle ? <MVCIEditTeam
                    player={this.props.player}
                    mvciCharacters={this.props.mvciCharacters}
                    team={this.props.team}
                    updatingTeams={this.props.updatingTeams}
                    changeEditToggle={this.changeEditToggle} /> : null}
            </TeamContainer>
        );
    }
}

export default MVCITeamCard;