import React, {Component} from 'react';
import {Box, Text, Divider, IconButton, Flyout} from 'gestalt';
// import * as FontAwesome from 'react-icons/lib/fa';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {
    faEdit,
    faPencilAlt, 
    faEraser,
    faAdjust,
    faMinusCircle,
    faPlusCircle,
    faPalette,
    faUndo,
    faRedo,
    faRulerCombined
} from '@fortawesome/fontawesome-free-solid'
import {
    faCircle,
    faSquare
} from '@fortawesome/fontawesome-free-regular'
class Tools extends Component{
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
      }
    
      render(){
        
        return(
            <Box>
                {/* <h3> Lets go for a <FontAwesome.FaAdjust />? </h3> */}
                <h1>
                    <FontAwesomeIcon icon={faPencilAlt} />
                    <FontAwesomeIcon icon={faRulerCombined} />
                    <FontAwesomeIcon icon={faEraser} />
                    <FontAwesomeIcon icon={faAdjust} />
                    <FontAwesomeIcon icon={faCircle} />
                    <FontAwesomeIcon icon={faSquare} />
                    <FontAwesomeIcon icon={faMinusCircle} />
                    <FontAwesomeIcon icon={faPlusCircle} />
                    <FontAwesomeIcon icon={faPalette} />
                    <FontAwesomeIcon icon={faUndo} />
                    <FontAwesomeIcon icon={faRedo} />
                    
                </h1>
            </Box>
        );
    }
}

export default Tools;