import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import NewCharacterOne from './NewCharacterOne'
import NewCharacterTwo from './NewCharacterTwo'
import NewCharacterThree from './NewCharacterThree'

const FormStyle = styled.div`
    display: flex;
    justify-content: center;
    ul {
        list-style: none;
    }
`

const ButtonStyle = styled.div`
     display: flex;
    justify-content: center;
`

const TitleStyle = styled.div`
    display: flex;
    justify-content: center;
`

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
                <TitleStyle>
                    <h4>Create your new team. There cannot be two or more of the same characters on a team</h4>
                </TitleStyle>
                <form onSubmit={this.handleSubmit}>
                    <FormStyle>
                        <ul>
                            <li><TextField defaultValue={this.state.nickname} floatingLabelText="Team Nickname" onChange={this.handleChange} /></li>
                            <li><NewCharacterOne characters={this.props.characters} setCharacterOne={this.setCharacterOne} /></li>
                            <li><NewCharacterTwo characters={this.props.characters} setCharacterTwo={this.setCharacterTwo} /></li>
                            <li><NewCharacterThree characters={this.props.characters} setCharacterThree={this.setCharacterThree} /></li>
                        </ul>
                    </FormStyle>
                    <ButtonStyle>
                    {this.state.characterOne[0]._id === this.state.characterTwo[0]._id || this.state.characterTwo[0]._id === this.state.characterThree[0]._id ||
                        this.state.characterOne[0]._id === this.state.characterThree[0]._id ||
                        !this.state.characterOne[0]._id || !this.state.characterTwo[0]._id || !this.state.characterThree[0]._id ?
                        <RaisedButton label="Submit" disabled={true} /> : <RaisedButton label="Submit" type="submit" />}
                    </ButtonStyle>
                </form>
            </div>
        );
    }
}

export default NewTeam;
