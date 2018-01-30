import React from 'react';

const MVCIEditCharacterSelector = (props) => {
    return (
        <div>
            <select onChange={(event) => props.setCharacterOne(event.target.value)} value={props.characterOne[0]._id}>
                <option> -First Character- </option>
                {props.mvciCharacters.map((character, index) => {
                    return <option key={index} value={character._id}>{character.name}</option>
                })}
            </select>
            <select onChange={(event) => props.setCharacterTwo(event.target.value)} value={props.characterTwo[0]._id}>
                <option> -Second Character- </option>
                {props.mvciCharacters.map((character, index) => {
                    return <option key={index} value={character._id}>{character.name}</option>
                })}
            </select>
            <select onChange={(event) => props.setInfinityStone(event.target.value)} value={props.infinityStone}>
                <option> -Select Infinity Stone- </option>
                <option value="Reality Stone">Reality Stone</option>
                <option value="Power Stone">Power Stone</option>
                <option value="Space Stone">Space Stone</option>
                <option value="Time Stone">Time Stone</option>
                <option value="Mind Stone">Mind Stone</option>
                <option value="Soul Stone">Soul Stone</option>
            </select>
        </div>
    );
};

export default MVCIEditCharacterSelector;