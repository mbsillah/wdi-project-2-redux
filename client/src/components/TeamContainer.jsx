import React, { Component } from 'react';
import TeamCard from './TeamCard'

class TeamContainer extends Component {

    renderTeams() {
        if (this.props.teams.length === 0) {
            return <h2>NO TEAMS TO DISPLAY</h2>
        } else {
            return (
                <div>
                    <h1>THE TEAMS</h1>
                    {this.props.teams.map(team => {
                        return <TeamCard key={team._id}
                            player={this.props.player} team={team}
                            characters={this.props.characters}
                            updatingTeams={this.props.updatingTeams} />
                    })}
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderTeams()}
            </div>
        );
    }
}

export default TeamContainer;