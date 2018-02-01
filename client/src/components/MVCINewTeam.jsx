import React, { Component } from 'react';
import axios from 'axios'
import MVCICharacterSelector from './MVCICharacterSelector'


class MVCINewTeam extends Component {

    state = {
        nickname: '',
        characterOne: [{}],
        characterTwo: [{}],
        infinityStone: ''
    }

    setCharacterOne = async (characterId) => {
        try {
            const res = await axios.get(`/api/mvcicharacters/${characterId}`)
            this.setState({ characterOne: [res.data] })
        } catch (error) {
            console.log(error)
        }
    }

    setCharacterTwo = async (characterId) => {
        try {
            const res = await axios.get(`/api/mvcicharacters/${characterId}`)
            this.setState({ characterTwo: [res.data] })
        } catch (error) {
            console.log(error)
        }
    }

    setInfinityStone = (stone) => {
        this.setState({ infinityStone: stone })
    }

    handleChange = (event) => {
        this.setState({ nickname: event.target.value })
    }

    handleSubmit = async (event) => {
        try {
            event.preventDefault()
            await axios.post(`/api/${this.props.player._id}/mvciteams/new`, {
                'team': this.state
            })
            this.props.updatingTeams()
            this.props.toggleNewMVCITeamForm()
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <h4>Create your new team. There cannot be two of the same characters on a team</h4>
                <form onSubmit={this.handleSubmit}>
                    <input type="nickname" placeholder="Team Nickname" onChange={this.handleChange} />
                    <MVCICharacterSelector mvciCharacters={this.props.mvciCharacters} setCharacterOne={this.setCharacterOne} setCharacterTwo={this.setCharacterTwo} setInfinityStone={this.setInfinityStone} />
                    {this.state.characterOne[0]._id === this.state.characterTwo[0]._id ?
                        <button type="button" disabled>Submit</button> : <button>Submit</button>}
                </form>
            </div>
        );
    }
}

export default MVCINewTeam;