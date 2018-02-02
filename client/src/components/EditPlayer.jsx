import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const FormStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    ul {
        list-style: none
    }
`

class EditPlayer extends Component {

    state = {
        player: {
            firstName: '',
            lastName: '',
            gamertag: '',
            img: '',
            twitter: '',
        },
        redirectToUpdatedPlayerPage: false
    }

    async componentWillMount() {
        try {
            const { playerId } = this.props.match.params
            const res = await axios.get(`/api/players/${playerId}`)
            this.setState({ player: res.data })
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updatedPlayer = { ...this.state.player }
        updatedPlayer[attribute] = event.target.value
        this.setState({ player: updatedPlayer })
    }

    handleSubmit = async (event) => {
        if (!this.state.player.firstName || !this.state.player.lastName || !this.state.player.gamertag) {
            alert('First Name, GamerTag, & Last Name are required')
        } else {
            try {
                event.preventDefault()
                const { playerId } = this.props.match.params
                await axios.put(`/api/players/${playerId}/edit`, {
                    'player': this.state.player
                })
                this.setState({ redirectToUpdatedPlayerPage: !this.state.redirectToUpdatedPlayerPage })
            } catch (error) {
                console.log(error)
            }
        }

    }

    render() {

        if (this.state.redirectToUpdatedPlayerPage) {
            return <Redirect to={`/player/${this.state.player._id}`} />
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <FormStyle>
                    <ul>
                        <li><input onChange={this.handleChange} name="firstName" type="text" placeholder="First Name (REQUIRED)" value={this.state.player.firstName} /></li>
                        <li><input onChange={this.handleChange} name="lastName" type="text" placeholder="Last Name (REQUIRED)" value={this.state.player.lastName} /></li>
                        <li><input onChange={this.handleChange} name="gamertag" type="text" placeholder="Gamertag (REQUIRED)" value={this.state.player.gamertag} /></li>
                        <li><input onChange={this.handleChange} name="img" type="text" placeholder="Image Link" value={this.state.player.img} /></li>
                        <li><input onChange={this.handleChange} name="twitter" type="text" placeholder="Your Twitter Name" value={this.state.player.twitter} /></li>
                        <li><button>Submit</button></li>
                    </ul>
                </FormStyle>
                </form>
                <Link to={`/player/${this.state.player._id}`}>Back to Player Page</Link>
            </div>
        );
    }
}

export default EditPlayer;