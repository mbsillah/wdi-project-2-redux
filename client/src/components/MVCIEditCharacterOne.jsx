import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class MVCIEditCharacterOne extends Component {

    state = {
        value: ''
    }

    componentWillMount() {
        const id = this.props.characterOne[0]._id
        this.setState({ value: id })
    }

    handleChange = (event, index, value) => {
        this.setState({ value })
        this.props.setCharacterOne(value)
    }

    render() {
        return (
            <div>
                <SelectField floatingLabelText="Character 1" value={this.state.value} onChange={this.handleChange}>
                    <MenuItem value='1' primaryText="Select A Character" />
                    {this.props.mvciCharacters.map((character, index) => {
                        return <MenuItem primaryText={character.name} key={index} value={character._id} />
                    })}
                </SelectField>
            </div>
        );
    }
}

export default MVCIEditCharacterOne;