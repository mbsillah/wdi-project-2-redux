import React, { Component } from 'react';
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';
import NewCharacterOne from './NewCharacterOne'
import NewCharacterTwo from './NewCharacterTwo'
import NewCharacterThree from './NewCharacterThree'

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
            await axios.post(`/api/${this.props.player._id}/teams/new`, {
                'team': this.state
            })
            this.props.updatingTeams()
            this.props.toggleNewTeamForm()
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <h4>Create your new team. There cannot be two or more of the same characters on a team</h4>
                <form onSubmit={this.handleSubmit}>
                    <input type="nickname" placeholder="Team Nickname" onChange={this.handleChange} />
                    <NewCharacterOne characters={this.props.characters} setCharacterOne={this.setCharacterOne}/>
                    <NewCharacterTwo characters={this.props.characters} setCharacterTwo={this.setCharacterTwo}/>
                    <NewCharacterThree characters={this.props.characters} setCharacterThree={this.setCharacterThree}/>
                    {this.state.characterOne[0]._id === this.state.characterTwo[0]._id || this.state.characterTwo[0]._id === this.state.characterThree[0]._id || this.state.characterOne[0]._id === this.state.characterThree[0]._id ||
                    !this.state.characterOne[0]._id || !this.state.characterTwo[0]._id || !this.state.characterThree[0]._id? 
                    <RaisedButton label="Submit" disabled={true} /> : <RaisedButton label="Submit" type="submit"/> }
                </form>
            </div>
        );
    }
}

export default NewTeam;

//<CharacterSelector characters={this.props.characters} setCharacterOne={this.setCharacterOne} setCharacterTwo={this.setCharacterTwo} setCharacterThree={this.setCharacterThree} />
