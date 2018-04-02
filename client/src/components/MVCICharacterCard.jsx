import React from 'react';

const MVCICharacterCard = (props) => {
    return (
        <div>
            <div className="mvciImgContainer">
                <img className="mvciCharacterPic" src={props.character.img} alt={props.character.name} />
            </div>
            <p>{props.character.name}</p>
        </div>
    );
};

export default MVCICharacterCard;