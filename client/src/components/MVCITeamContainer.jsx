import React, { Component } from 'react';
import MVCITeamCard from './MVCITeamCard'

class MVCITeamContainer extends Component {

    renderTeams() {
        if (this.props.mvciTeams.length === 0) {
            return <h2>NO TEAMS TO DISPLAY</h2>
        } else {
            return (
                <div>
                    <h1>Marvel vs Capcom: Infinite TEAMS</h1>
                    {this.props.mvciTeams.map(team => {
                        return <MVCITeamCard key={team._id}
                            player={this.props.player} team={team}
                            mvciCharacters={this.props.mvciCharacters}
                            updatingTeams={this.props.updatingTeams}
                            toggleNewMVCITeamForm={this.props.toggleNewMVCITeamForm} />
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

export default MVCITeamContainer;