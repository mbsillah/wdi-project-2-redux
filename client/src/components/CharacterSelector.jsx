import React from 'react';

const CharacterSelector = (props) => {
    return (
        <div>
            <select onChange={(event) => props.setCharacterOne(event.target.value)}>
                <option> -First Character- </option>
                {props.characters.map((character, index) => {
                    return <option key={index} value={character._id}>{character.name}</option>
                })}
            </select>
            <select onChange={(event) => props.setCharacterTwo(event.target.value)}>
                <option> -Second Character- </option>
                {props.characters.map((character, index) => {
                    return <option key={index} value={character._id}>{character.name}</option>
                })}
            </select>
            <select onChange={(event) => props.setCharacterThree(event.target.value)}>
                <option> -Third Character- </option>
                {props.characters.map((character, index) => {
                    return <option key={index} value={character._id}>{character.name}</option>
                })}
            </select>
        </div>
    );
};

export default CharacterSelector;
