import React, { Component } from 'react';
import axios from 'axios'
import MVCIEditCharacterSelector from './MVCIEditCharacterSelector'

class MVCIEditTeam extends Component {

    state = {
        nickname: '',
        characterOne: [{}],
        characterTwo: [{}],
        infinityStone: ''
    }

    async componentWillMount() {
        const currentNickname = this.props.team.nickname
        const currentCharacter1 = this.props.team.characterOne
        const currentCharacter2 = this.props.team.characterTwo
        const currentInfinityStone = this.props.team.infinityStone
        this.setState({ nickname: currentNickname, characterOne: currentCharacter1, characterTwo: currentCharacter2, infinityStone: currentInfinityStone })
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
            await axios.put(`/api/${this.props.player._id}/mvciteams/${this.props.team._id}/edit`, {
                'team': this.state
            })
            this.props.updatingTeams()
            this.props.changeEditToggle()
        } catch (error) {
            console.log(error)
        }
    }


    render() {
        return (
            <div>
                <p className="characterWarning">There cannot be two of the same characters on a team!</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="nickname" placeholder="Team Nickname" onChange={this.handleChange} value={this.state.nickname} />
                    <MVCIEditCharacterSelector
                        characterOne={this.state.characterOne}
                        characterTwo={this.state.characterTwo}
                        infinityStone={this.state.infinityStone}
                        mvciCharacters={this.props.mvciCharacters}
                        setCharacterOne={this.setCharacterOne}
                        setCharacterTwo={this.setCharacterTwo}
                        setInfinityStone={this.setInfinityStone} />
                    {this.state.characterOne[0]._id === this.state.characterTwo[0]._id ?
                        <button type="button" disabled>Submit</button> : <button>Submit</button>}
                </form>
            </div>
        );
    }
}

export default MVCIEditTeam;