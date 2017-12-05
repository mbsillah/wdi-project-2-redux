import React, { Component } from 'react';
import axios from 'axios'
import CharacterSelector from './CharacterSelector'

class NewTeam extends Component {

    state = {
        nickname: '',
        characterOne: [{}],
        characterTwo: [{}],
        characterThree: [{}],
    }

    setCharacterOne = async (characterId) => {
        try {
            const res = await axios.get(`/api/characters/${characterId}`)
            this.setState({ characterOne: [res.data] })
        } catch (error) {
            console.log(error)
        }
    }

    setCharacterTwo = async (characterId) => {
        try {
            const res = await axios.get(`/api/characters/${characterId}`)
            this.setState({ characterTwo: [res.data] })
        } catch (error) {
            console.log(error)
        }
    }

    setCharacterThree = async (characterId) => {
        try {
            const res = await axios.get(`/api/characters/${characterId}`)
            this.setState({ characterThree: [res.data] })
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (event) => {
        this.setState({ nickname: event.target.value })
    }

    handleSubmit = async (event) => {
        try {
            event.preventDefault()
            const res = await axios.post('/api/teams/new', {
                'team': this.state
            })
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <h4>Set your new Team</h4>
                <form onSubmit={this.handleSubmit}>
                    <input type="nickname" placeholder="Team Nickname" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
                <CharacterSelector characters={this.props.characters} setCharacterOne={this.setCharacterOne} setCharacterTwo={this.setCharacterTwo} setCharacterThree={this.setCharacterThree} />
                <button>Submit</button>
            </div>
        );
    }
}

export default NewTeam;