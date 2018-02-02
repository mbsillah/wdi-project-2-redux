import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class MVCINewCharacterOne extends Component {

    state = {
        value: '1',
    }

    handleChange = (event, index, value) => {
        this.setState({ value })
        this.props.setCharacterTwo(value)
    }

    handleIdChange = (id) => {
        console.log(id)
        this.setState({ id })
    }

    render() {
        return (
            <div>
                <SelectField floatingLabelText="Character 2" value={this.state.value} onChange={this.handleChange}>
                    <MenuItem value='1' primaryText="Select A Character" />
                    {this.props.mvciCharacters.map((character, index) => {
                        return <MenuItem primaryText={character.name} key={index} value={character._id} />
                    })}
                </SelectField>
            </div>
        );
    }
}

export default MVCINewCharacterOne;