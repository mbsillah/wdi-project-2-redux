import React from 'react';
import CharacterCard from './CharacterCard'

const TeamCard = (props) => {
    return (
        <div>
            <h4>{props.team.nickname}</h4>
            <CharacterCard character={props.team.characterOne[0]} />
            <CharacterCard character={props.team.characterTwo[0]}/>
            <CharacterCard character={props.team.characterThree[0]}/>
            <ul>
                <li><button>Edit Team</button></li>
                <li><button>Delete Team</button></li>
            </ul>
        </div>
    );
};

export default TeamCard;