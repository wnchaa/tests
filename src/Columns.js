import React, {Component} from 'react';
import {
    Box,
    Column
} from 'gestalt';
import 'gestalt/dist/gestalt.css';
import './Style.css';
import Accordions from './Accordions';
class Columns extends Component{
    render() {
        return (
          <Box display="flex" direction="row" paddingY={2}>
          <Column span={4} mdSpan={2}>
            <div className="sidebar" >
              <Accordions/>
            </div>
          </Column>
          <Column span={8} mdSpan={10}>
            <div className="main"></div>
          </Column>
        </Box>
        );
      }
    }

export default Columns;

