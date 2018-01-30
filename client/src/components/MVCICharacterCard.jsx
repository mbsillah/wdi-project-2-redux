import React from 'react';

const MVCICharacterCard = (props) => {
    return (
        <div>
            <img className="mvciCharacterPic" src={props.character.img} alt={props.character.name} />
            <p>{props.character.name}</p>
        </div>
    );
};

export default MVCICharacterCard;