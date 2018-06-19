import React, {Component} from 'react';
import {
    Box, RadioButton, Label, Text, Column
} from 'gestalt';

class Radiobt extends Component {
    constructor(props) {
      super(props);
      this.state = { gender: undefined };
    }
    render() {
      return (
            <Box display="flex" direction="row" paddingY={4}>
                <Column span={6}>
                    <Box alignItems="center" display="flex" direction="row">
                        <RadioButton
                            checked={this.state.gender === 'male'}
                            id="genderMale"
                            name="gender"
                            onChange={() => this.setState({ gender: 'male' })}
                            value="male"
                        />
                        <Box flex="grow">
                            <Label htmlFor="genderMale">
                                <Box paddingX={4}>
                                    <Text>Male</Text>
                                </Box>
                            </Label>
                        </Box>
                    </Box> 
                </Column>
                <Column span={6}>
                    <Box alignItems="center" display="flex" direction="row">
                        <RadioButton
                            checked={this.state.gender === 'female'}
                            id="genderFemale"
                            name="gender"
                            onChange={() => this.setState({ gender: 'female' })}
                            value="female"
                        />
                        <Box flex="grow">
                            <Label htmlFor="genderFemale">
                                <Box paddingX={4} >
                                    <Text>Female</Text>
                                </Box>
                            </Label>
                        </Box>
                    </Box>        
                </Column>
            </Box>
      );
    }
  }
export default Radiobt;