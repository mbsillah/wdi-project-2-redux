import React, { Component } from 'react';
import axios from 'axios'
import TeamCard from './TeamCard'

class Player extends Component {

    state = {
        player: {
            teams: []
        },
        characters: []
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
            this.setState({ characters: res.data})
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.player.firstName} "{this.state.player.gamertag}" {this.state.player.lastName}</h1>
                <img src={this.state.player.img} alt={this.state.player.firstName}/>
                {this.state.player.teams.map(team => {
                    return <TeamCard key={team._id} team={team} characters={this.state.characters}/>
                })}
                <button>Add New Team</button>
            </div>
        );
    }
}

export default Player;