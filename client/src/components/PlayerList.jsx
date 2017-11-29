import React, { Component } from 'react';
import axios from 'axios'
import PlayerCard from './PlayerCard'

class PlayerList extends Component {

    state = {
        players: []
    }

    async componentWillMount() {
        try {
            const res = await axios.get('/api/players')
            this.setState({ players: res.data })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                {this.state.players.map(player => {
                    return <PlayerCard key={player._id} player={player} />
                })}
            </div>
        );
    }
}

export default PlayerList;

