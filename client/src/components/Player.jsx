import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components'
import TeamContainer from './TeamContainer'
import MVCITeamContainer from './MVCITeamContainer'
import NewTeam from './NewTeam'
import MVCINewTeam from './MVCINewTeam'
import RaisedButton from 'material-ui/RaisedButton';


const PlayerStyle = styled.div`
    display: flex;
    flex-direction: column;
    h1 {
        text-align: center;
        margin: 50px;
    }
    p {
        text-align: center;
    }
`

const ButtonStyle = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px
`

class Player extends Component {

    state = {
        player: {},
        teams: [],
        mvciTeams: [],
        characters: [],
        mvciCharacters: [],
        newTeamForm: false,
        newMVCITeamForm: false
    }

    async componentWillMount() {
        try {
            const { playerId } = this.props.match.params
            const res = await axios.get(`/api/players/${playerId}`)
            const teams = res.data.teams
            const mvciTeams = res.data.mvciTeams
            this.setState({ player: res.data, teams: teams, mvciTeams: mvciTeams })
            this.getCharacters()
            this.getMVCICharacters()
        } catch (error) {
            console.log(error)
        }
    }

    getCharacters = async () => {
        try {
            const res = await axios.get(`/api/characters`)
            this.setState({ characters: res.data })
        } catch (error) {
            console.log(error)
        }
    }

    getMVCICharacters = async () => {
        try {
            const res = await axios.get(`/api/mvcicharacters`)
            this.setState({ mvciCharacters: res.data })
        } catch (error) {
            console.log(error)
        }
    }


    toggleNewTeamForm = () => {
        this.setState({ newTeamForm: !this.state.newTeamForm })
    }

    toggleNewMVCITeamForm = () => {
        this.setState({ newMVCITeamForm: !this.state.newMVCITeamForm })
    }

    updatingTeams = async () => {
        try {
            const { playerId } = this.props.match.params
            const res = await axios.get(`/api/players/${playerId}`)
            const updatedTeams = res.data.teams
            const updatedMVCITeams = res.data.mvciTeams
            this.setState({ teams: updatedTeams, mvciTeams: updatedMVCITeams })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <PlayerStyle>
                <h1>{this.state.player.firstName} "{this.state.player.gamertag}" {this.state.player.lastName}</h1>
                {this.state.player.twitter ? <p>Follow me on <a target="_blank" href={`https://twitter.com/${this.state.player.twitter}`}>Twitter</a></p> : null}
                {this.state.player.img ? <img className="profilePic" src={this.state.player.img} alt={this.state.player.firstName} /> :
                    <img className="profilePic" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt={this.state.player.firstName} />}
                <Link to={`/player/${this.state.player._id}/edit`}><p>Edit Profile</p></Link>
                <TeamContainer player={this.state.player}
                    characters={this.state.characters}
                    teams={this.state.teams}
                    updatingTeams={this.updatingTeams} />
                {this.state.newTeamForm ? <NewTeam player={this.state.player}
                    characters={this.state.characters}
                    teams={this.state.teams}
                    toggleNewTeamForm={this.toggleNewTeamForm}
                    updatingTeams={this.updatingTeams} /> : null}
                <ButtonStyle>
                    {this.state.newTeamForm ? <RaisedButton className='changeButton' label="Cancel" onClick={() => this.toggleNewTeamForm()} /> : <RaisedButton backgroundColor='#9BC2CF' labelColor='white' className='changeButton' label="Add A New UMVC3 Team" onClick={() => this.toggleNewTeamForm()} />}
                </ButtonStyle>
                <MVCITeamContainer player={this.state.player}
                    mvciTeams={this.state.mvciTeams}
                    mvciCharacters={this.state.mvciCharacters}
                    updatingTeams={this.updatingTeams} />
                {this.state.newMVCITeamForm ? <MVCINewTeam player={this.state.player}
                    mvciCharacters={this.state.mvciCharacters}
                    mvciTeams={this.state.mvciTeams}
                    updatingTeams={this.updatingTeams}
                    toggleNewMVCITeamForm={this.toggleNewMVCITeamForm} /> : null}
                <ButtonStyle>
                    {this.state.newMVCITeamForm ? <RaisedButton className='changeButton' label="Cancel" onClick={() => this.toggleNewMVCITeamForm()} /> : <RaisedButton backgroundColor='#9BC2CF' labelColor='white' className='changeButton' label="Add A New MVCI Team" onClick={() => this.toggleNewMVCITeamForm()} />}
                </ButtonStyle>
            </PlayerStyle>
        );
    }
}

export default Player;