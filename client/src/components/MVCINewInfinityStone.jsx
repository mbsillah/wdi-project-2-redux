import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class MVCINewInfinityStone extends Component {
    state = {
        value: '1',
    }

    handleChange = (event, index, value) => {
        this.setState({ value })
        this.props.setInfinityStone(value)
    }


    render() {
        return (
            <div>
                <SelectField floatingLabelText="Infinity Stone" value={this.state.value} onChange={this.handleChange}>
                    <MenuItem value='1' primaryText="Select Your Stone" />
                    <MenuItem value='Reality Stone' primaryText='Reality Stone' />
                    <MenuItem value='Power Stone' primaryText='Power Stone' />
                    <MenuItem value='Space Stone' primaryText='Space Stone' />
                    <MenuItem value='Time Stone' primaryText='Time Stone' />
                    <MenuItem value='Mind Stone' primaryText='Mind Stone' />
                    <MenuItem value='Soul Stone' primaryText='Soul Stone' />
                </SelectField>
            </div>
        );
    }
}

export default MVCINewInfinityStone;