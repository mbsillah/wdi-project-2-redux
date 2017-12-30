import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class NewPlayer extends Component {

    state = {
        newPlayer: {
            firstName: '',
            lastName: '',
            gamertag: '',
            img: '',
            twitter: '',
        },
        newPlayerId: '',
        redirectToNewPlayerPage: false
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updatedPlayer = { ...this.state.newPlayer }
        updatedPlayer[attribute] = event.target.value
        this.setState({ newPlayer: updatedPlayer })
    }

    handleSubmit = async (event) => {
        if (!this.state.newPlayer.firstName || !this.state.newPlayer.lastName || !this.state.newPlayer.gamertag) {
            alert('First Name, GamerTag, & Last Name are required')
        } else {
            try {
                event.preventDefault()
                const response = await axios.post(`/api/players/new`, {
                    'player': this.state.newPlayer
                })
                this.setState({ redirectToNewPlayerPage: !this.state.redirectToNewPlayerPage, newPlayerId: response.data._id })
            } catch (error) {
                console.log(error)
            }
        }

    }


    render() {

        if (this.state.redirectToNewPlayerPage) {
            return <Redirect to={`/player/${this.state.newPlayerId}`} />
        }

        return (
            <div>
                <h2>NEW PLAYER</h2>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name="firstName" type="text" placeholder="First Name (REQUIRED)" value={this.state.newPlayer.firstName} />
                    <input onChange={this.handleChange} name="lastName" type="text" placeholder="Last Name (REQUIRED)" value={this.state.newPlayer.lastName} />
                    <input onChange={this.handleChange} name="gamertag" type="text" placeholder="Gamertag (REQUIRED)" value={this.state.newPlayer.gamertag} />
                    <input onChange={this.handleChange} name="img" type="text" placeholder="Image Link" value={this.state.newPlayer.img} />
                    <input onChange={this.handleChange} name="twitter" type="text" placeholder="Your Twitter Name" value={this.state.newPlayer.twitter} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default NewPlayer;