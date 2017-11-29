import React, { Component } from 'react';
import CharacterCard from './CharacterCard'

class TeamCard extends Component {

    state = {
        editToggle: false
    }

    changeEditToggle = () => {
        this.setState({editToggle: !this.state.editToggle})
    }

    render() {
        return (
            <div>
                <h4>{this.props.team.nickname}</h4>
                <CharacterCard character={this.props.team.characterOne[0]} />
                <CharacterCard character={this.props.team.characterTwo[0]} />
                <CharacterCard character={this.props.team.characterThree[0]} />
                <ul>
                    <li><button>Edit Team</button></li>
                    <li><button>Delete Team</button></li>
                </ul>
            </div>
        );
    }
}

export default TeamCard;

