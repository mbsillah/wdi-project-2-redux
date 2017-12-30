import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import TeamContainer from './TeamContainer'
import NewTeam from './NewTeam'

const PlayerStyle = styled.div`
    h1 {
        text-align: center;
    }
`

class Player extends Component {

    state = {
        player: {},
        teams: [],
        characters: [],
        newTeamForm: false
    }

    async componentWillMount() {
        try {
            const { playerId } = this.props.match.params
            const res = await axios.get(`/api/players/${playerId}`)
            const teams = res.data.teams
            this.setState({ player: res.data, teams: teams })
            this.getCharacters()
        } catch (error) {
            console.log(error)
        }
    }

    getCharacters = async () => {
        try {
            const res = await axios.get(`/api/characters`)
            this.setState({ characters: res.data })
        } catch (error) {
            console.log(error)
        }
    }

    toggleNewTeamForm = () => {
        this.setState({ newTeamForm: !this.state.newTeamForm })
    }

    updatingTeams = async () => {
        try {
            const { playerId } = this.props.match.params
            const res = await axios.get(`/api/players/${playerId}`)
            const updatedTeams = res.data.teams
            this.setState({ teams: updatedTeams })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <PlayerStyle>
                <h1>{this.state.player.firstName} "{this.state.player.gamertag}" {this.state.player.lastName}</h1>
                {this.state.player.twitter ? <p>Follow me on <a target="_blank" href={`https://twitter.com/${this.state.player.twitter}`}>Twitter</a></p> : null}
                <p><Link to={`/player/${this.state.player._id}/edit`}>Edit Profile</Link></p>
                <img src={this.state.player.img} alt={this.state.player.firstName} />
                <TeamContainer player={this.state.player} characters={this.state.characters} teams={this.state.teams} updatingTeams={this.updatingTeams} />
                {this.state.newTeamForm ? <NewTeam player={this.state.player}
                    characters={this.state.characters}
                    teams={this.state.teams}
                    toggleNewTeamForm={this.toggleNewTeamForm}
                    updatingTeams={this.updatingTeams} /> : null}
                {this.state.newTeamForm ? <button onClick={() => this.toggleNewTeamForm()}>Cancel</button> : <button onClick={() => this.toggleNewTeamForm()}>Add New Team</button>}
            </PlayerStyle>
        );
    }
}

export default Player;