import React, { Component } from 'react';
import CharacterCard from './CharacterCard'
import EditTeam from './EditTeam'
import styled from 'styled-components'
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const TeamStyle = styled.div`
    display: flex;
    justify-content: space-around;
`

const TitleStyle = styled.div`
    text-align: center;
    h2 {
        margin: 30px;
        padding-top: 30px;
    }
`

const TeamContainer = styled.div`
    ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
    }

`

class TeamCard extends Component {

    state = {
        editToggle: false
    }

    changeEditToggle = () => {
        this.setState({ editToggle: !this.state.editToggle })
    }

    deleteTeam = async () => {
        try {
            await axios.delete(`/api/${this.props.player._id}/teams/${this.props.team._id}/delete`)
            this.props.updatingTeams()
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <Paper className="teamCard" zDepth={3}>
                <TeamContainer>
                    <TitleStyle>
                        <h2>- {this.props.team.nickname} -</h2>
                    </TitleStyle>
                    <TeamStyle>
                        <CharacterCard character={this.props.team.characterOne[0]} />
                        <CharacterCard character={this.props.team.characterTwo[0]} />
                        <CharacterCard character={this.props.team.characterThree[0]} />
                    </TeamStyle>
                    <ul>
                        {this.state.editToggle ? <li><RaisedButton backgroundColor="#FFFF7F" labelColor='white' className="teamCardButton" label="Cancel" onClick={this.changeEditToggle} /></li> :
                            <li><RaisedButton backgroundColor="#FFFF7F" labelColor='white' className="teamCardButton" label="Edit Team" onClick={this.changeEditToggle} /></li>}
                        <li><RaisedButton backgroundColor="#FF6666" labelColor='white' className="teamCardButton" label="Remove Team" onClick={this.deleteTeam} /></li>
                    </ul>
                    <div className="editTeamForm">
                        {this.state.editToggle ? <EditTeam
                            player={this.props.player}
                            characters={this.props.characters}
                            team={this.props.team}
                            updatingTeams={this.props.updatingTeams}
                            changeEditToggle={this.changeEditToggle} /> : null}
                    </div>
                </TeamContainer>
            </Paper>
        );
    }
}

export default TeamCard;

