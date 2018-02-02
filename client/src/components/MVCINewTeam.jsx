import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MVCINewCharacterOne from './MVCINewCharacterOne'
import MVCINewCharacterTwo from './MVCINewCharacterTwo'
import MVCINewInfinityStone from './MVCINewInfinityStone'

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
                <TitleStyle>
                    <h4>Create your new team. There cannot be two of the same characters on a team</h4>
                </TitleStyle>
                <form onSubmit={this.handleSubmit}>
                    <FormStyle>
                        <ul>
                            <li><TextField defaultValue={this.state.nickname} floatingLabelText="Team Nickname" onChange={this.handleChange} /></li>
                            <li><MVCINewCharacterOne mvciCharacters={this.props.mvciCharacters} setCharacterOne={this.setCharacterOne} /></li>
                            <li><MVCINewCharacterTwo mvciCharacters={this.props.mvciCharacters} setCharacterTwo={this.setCharacterTwo} /></li>
                            <li><MVCINewInfinityStone setInfinityStone={this.setInfinityStone} /></li>
                        </ul>
                    </FormStyle>
                    <ButtonStyle>
                        {this.state.characterOne[0]._id === this.state.characterTwo[0]._id || !this.state.characterOne[0]._id || !this.state.characterTwo[0]._id ?
                            <RaisedButton label="Submit" disabled={true} /> : <RaisedButton label="Submit" type="submit" />}
                    </ButtonStyle>
                </form>
            </div>
        );
    }
}

export default MVCINewTeam;