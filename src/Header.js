import React, {Component} from 'react';
import {Box} from 'gestalt';
import './Style.css';

class Header extends Component{
    render(){
        return(
            <div className="headers">
                <Box
                    alignItems="center"
                    display="flex"
                    height= {35}
                >
                    <Box >
                        <div className="Text" >Autoknee</div>
                        
                    </Box>
                    <Box>
                    <div className="textMeaning">Automatic Templating for Pre-operative Planning in Total Knee Replacement</div>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default Header;