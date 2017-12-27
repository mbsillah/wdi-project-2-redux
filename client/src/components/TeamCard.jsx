import React, { Component } from 'react';
import CharacterCard from './CharacterCard'
import styled from 'styled-components'
import axios from 'axios'

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
            <TeamContainer>
                <TitleStyle>
                    <h4>{this.props.team.nickname}</h4>
                </TitleStyle>
                <TeamStyle>
                    <CharacterCard character={this.props.team.characterOne[0]} />
                    <CharacterCard character={this.props.team.characterTwo[0]} />
                    <CharacterCard character={this.props.team.characterThree[0]} />
                </TeamStyle>
                <ul>
                    <li><button>Edit Team</button></li>
                    <li><button onClick={this.deleteTeam}>Delete Team</button></li>
                </ul>
            </TeamContainer>
        );
    }
}

export default TeamCard;

