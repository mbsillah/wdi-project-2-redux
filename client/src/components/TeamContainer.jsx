import React, { Component } from 'react';
import TeamCard from './TeamCard'

class TeamContainer extends Component {

    render() {
        return (
            <div>
            <h1>THE TEAMS</h1>
            {this.props.teams.map(team => {
                    return <TeamCard key={team._id} team={team} />
                })}    
            </div>
        );
    }
}

export default TeamContainer;