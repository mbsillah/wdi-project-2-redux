import React, { Component } from 'react';
import axios from 'axios'
import PlayerCard from './PlayerCard'
import styled from 'styled-components'

const PlayerCards = styled.div`
    display: flex;
    justify-content: space-between;
    img {
        width: 100px;
        height: 100px;
    }
`

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
            <PlayerCards>
                {this.state.players.map(player => {
                    return <PlayerCard key={player._id} player={player} />
                })}
            </PlayerCards>
        );
    }
}

export default PlayerList;

