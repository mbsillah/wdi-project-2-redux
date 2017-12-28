import React from 'react';

const EditCharacterSelector = (props) => {
    return (
        <div>
            <select onChange={(event) => props.setCharacterOne(event.target.value)} value={props.characterOne[0]._id}>
                <option> -First Character- </option>
                {props.characters.map((character, index) => {
                    return <option key={index} value={character._id}>{character.name}</option>
                })}
            </select>
            <select onChange={(event) => props.setCharacterTwo(event.target.value)} value={props.characterTwo[0]._id}>
                <option> -Second Character- </option>
                {props.characters.map((character, index) => {
                    return <option key={index} value={character._id}>{character.name}</option>
                })}
            </select>
            <select onChange={(event) => props.setCharacterThree(event.target.value)} value={props.characterThree[0]._id}>
                <option> -Third Character- </option>
                {props.characters.map((character, index) => {
                    return <option key={index} value={character._id}>{character.name}</option>
                })}
            </select>
        </div>
    );
};

export default EditCharacterSelector;