import React, { Component } from 'react';
import axios from 'axios'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MVCIEditCharacterOne from './MVCIEditCharacterOne'
import MVCIEditCharacterTwo from './MVCIEditCharacterTwo'
import MVCIEditInfinityStone from './MVCIEditInfinityStone'

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
                    <TextField defaultValue={this.state.nickname} floatingLabelText="Team Nickname" onChange={this.handleChange} />
                    <MVCIEditCharacterOne characterOne={this.state.characterOne} mvciCharacters={this.props.mvciCharacters} />
                    <MVCIEditCharacterTwo characterTwo={this.state.characterTwo} mvciCharacters={this.props.mvciCharacters} />
                    <MVCIEditInfinityStone infinityStone={this.state.infinityStone} setInfinityStone={this.setInfinityStone} />
                    {this.state.characterOne[0]._id === this.state.characterTwo[0]._id || !this.state.characterOne[0]._id || !this.state.characterTwo[0]._id ?
                        <RaisedButton label="Save" disabled={true} /> : <RaisedButton label="Save" type="submit" />}
                </form>
            </div>
        );
    }
}

export default MVCIEditTeam;