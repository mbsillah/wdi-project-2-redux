import React, { Component } from 'react';
import axios from 'axios'
import TeamCard from './TeamCard'
import NewTeam from './NewTeam'

class Player extends Component {

    state = {
        player: {
            teams: []
        },
        characters: [],
        newTeamForm: false
    }

    async componentWillMount() {
        try {
            const { playerId } = this.props.match.params
            const res = await axios.get(`/api/players/${playerId}`)
            this.setState({ player: res.data })
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

    toggleNewTeamForm() {
        this.setState({ newTeamForm: !this.state.newTeamForm })
    }

    render() {
        return (
            <div>
                <h1>{this.state.player.firstName} "{this.state.player.gamertag}" {this.state.player.lastName}</h1>
                <img src={this.state.player.img} alt={this.state.player.firstName}/>
                {this.state.player.teams.map(team => {
                    return <TeamCard key={team._id} team={team} characters={this.state.characters}/>
                })}
                {this.state.newTeamForm ?  <NewTeam characters={this.state.characters} /> : null}
                <button onClick={() => this.toggleNewTeamForm()}>Add New Team</button>
            </div>
        );
    }
}

export default Player;