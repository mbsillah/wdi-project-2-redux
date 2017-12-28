import React, { Component } from 'react';
import axios from 'axios'
import EditCharacterSelector from './EditCharacterSelector'

class EditTeam extends Component {

    state = {
        nickname: '',
        characterOne: [{}],
        characterTwo: [{}],
        characterThree: [{}],
    }

    async componentWillMount() {
        const currentNickname = this.props.team.nickname
        const currentCharacter1 = this.props.team.characterOne
        const currentCharacter2 = this.props.team.characterTwo
        const currentCharacter3 = this.props.team.characterThree
        this.setState ({ nickname: currentNickname, characterOne: currentCharacter1, characterTwo: currentCharacter2, characterThree: currentCharacter3 })
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
            await axios.put(`/api/${this.props.player._id}/teams/${this.props.team._id}/edit`, {
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
                <form onSubmit={this.handleSubmit}>
                    <input type="nickname" placeholder="Team Nickname" onChange={this.handleChange} value={this.state.nickname}/>
                    <EditCharacterSelector
                    characterOne={this.state.characterOne} 
                    characterTwo={this.state.characterTwo}
                    characterThree={this.state.characterThree}
                    characters={this.props.characters} 
                    setCharacterOne={this.setCharacterOne} 
                    setCharacterTwo={this.setCharacterTwo} 
                    setCharacterThree={this.setCharacterThree} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default EditTeam;