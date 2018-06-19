import React, {Component} from 'react';
import { Box, Label, Text, SelectList } from 'gestalt';
class Selectlist extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this._handleChange.bind(this);
      this.state = {
        city: 'la'
      }
    }
  
    _handleChange({ value }) {
      this.setState({
        city: value,
      })
    }
  
    render() {
      const cityOptions = [
        {
          value: "bos",
          label: "Boston"
        },
        {
          value: "la",
          label: "Los Angeles"
        },
        {
          value: "sf",
          label: "San Francisco"
        }
      ];
      return (
        <Box>
          <Box paddingY={2}>
            <Label htmlFor="brands">
              <Text>Brands</Text>
            </Label>
          </Box>
          <SelectList
            id="brands"
            name="brands"
            onChange={this.handleChange}
            options={cityOptions}
            placeholder="Select brands"
            value={this.state.city}
          />
        </Box>
      );
    }
  }
export default Selectlist;