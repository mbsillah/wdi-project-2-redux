import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import EditCharacterOne from './EditCharacterOne'
import EditCharacterTwo from './EditCharacterTwo'
import EditCharacterThree from './EditCharacterThree'

const FormStyle = styled.div`
    display: flex;
    justify-content: center;
`

const ButtonStyle = styled.div`
    display: flex;
    padding-bottom: 30px; 
    justify-content: center;
`

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
        this.setState({ nickname: currentNickname, characterOne: currentCharacter1, characterTwo: currentCharacter2, characterThree: currentCharacter3 })
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
                <p className="characterWarning">There cannot be two or more of the same characters on a team!</p>
                <form onSubmit={this.handleSubmit}>
                    <FormStyle>
                    <ul>
                        <li><TextField defaultValue={this.state.nickname} floatingLabelText="Team Nickname" onChange={this.handleChange} /></li>
                        <li><EditCharacterOne characters={this.props.characters} characterOne={this.state.characterOne} setCharacterOne={this.setCharacterOne} /></li>
                        <li><EditCharacterTwo characters={this.props.characters} characterTwo={this.state.characterTwo} setCharacterTwo={this.setCharacterTwo} /></li>
                        <li><EditCharacterThree characters={this.props.characters} characterThree={this.state.characterThree} setCharacterThree={this.setCharacterThree} /></li>
                    </ul>
                    </FormStyle>
                    <ButtonStyle>
                    {this.state.characterOne[0]._id === this.state.characterTwo[0]._id || this.state.characterTwo[0]._id === this.state.characterThree[0]._id ||
                        this.state.characterOne[0]._id === this.state.characterThree[0]._id ||
                        !this.state.characterOne[0]._id || !this.state.characterTwo[0]._id || !this.state.characterThree[0]._id ?
                        <RaisedButton label="Save" disabled={true} /> : <RaisedButton backgroundColor='#66B266' label="Save" type="submit" />}
                    </ButtonStyle>    
                </form>
            </div>
        );
    }
}

export default EditTeam;