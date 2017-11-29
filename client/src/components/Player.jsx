import React, { Component } from 'react';
import axios from 'axios'
import TeamCard from './TeamCard'

class Player extends Component {

    state = {
        player: {
            teams: []
        }
    }

    async componentWillMount() {
        try {
            const { playerId } = this.props.match.params
            const res = await axios.get(`/api/players/${playerId}`)
            this.setState({ player: res.data })
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
                    return <TeamCard key={team._id} team={team}/>
                })}
            </div>
        );
    }
}

export default Player;