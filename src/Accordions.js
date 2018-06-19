import 'rc-collapse/assets/index.css';
// import 'string.prototype.repeat';
import Collapse, { Panel } from 'rc-collapse';
import React, {Component} from 'react';
import Selectlist from './Selectlist';
import {Box,Button} from 'gestalt';
import Radiobt from './Radiobt';
import Tools from './Tools';
function random() {
  return parseInt(Math.random() * 10, 10) + 1;
}

class Accordions extends Component {
  state = {
    time: random(),
    accordion: false,
    activeKey: ['4'],
  }

  onChange = (activeKey) => {
    this.setState({
      activeKey,
    });
  }

  getItems() {
    const items = [];
    // for (let i = 0, len = 3; i < len; i++) {
    //   const key = i + 1;
    //   items.push(
    //     <Panel header={`This is panel header ${key}`} key={key} disabled={i === 0}>
    //       <p>{text.repeat(this.state.time)}</p>
    //     </Panel>
    //   );
    // }

    //upload
    items.push(
      <Collapse defaultActiveKey="1">
         <Panel header={'Upload'} key="1" id="header-test">
          <Radiobt/>
          <Box ><Button text="UPLOAD" color="red" size="sm"/></Box>
         </Panel>
      </Collapse>
      // <Panel header={'Upload'} key="4">
      //   <Collapse defaultActiveKey="1">
      //     <Panel header={'Top'} key="1" id="header-test">
      //       <p><Selectlist/></p>
      //     </Panel>
      //   </Collapse>
      //   <br/>
      //   <Collapse defaultActiveKey="1">
      //     <Panel header={'Bottom'} key="1" id="header-test">
      //       <p><Selectlist/></p>
      //     </Panel>
      //   </Collapse>
      // </Panel>
    );

    //Tool
    items.push(
        <Panel header={'Tools'} key="6">
            <Collapse defaultActiveKey="1">
                <Tools/>
            </Collapse>
        </Panel>
    );

    //Template
    items.push(
      <Panel header={'Template Knee'} key="4">
        <Collapse defaultActiveKey="1">
          <Panel header={'Top'} key="1" id="header-test">
            <p><Selectlist/></p>
          </Panel>
        </Collapse>
        <br/>
        <Collapse defaultActiveKey="1">
          <Panel header={'Bottom'} key="1" id="header-test">
            <p><Selectlist/></p>
          </Panel>
        </Collapse>
      </Panel>
    );

    return items;
  }

  setActivityKey = () => {
    this.setState({
      activeKey: ['2'],
    });
  }

  reRender = () => {
    this.setState({
      time: random(),
    });
  }

  toggle = () => {
    this.setState({
      accordion: !this.state.accordion,
    });
  }

  render() {
    const accordion = this.state.accordion;
    const activeKey = this.state.activeKey;
    return (<div style={{ margin: 0, width: 'auto', padding: 5,paddingTop:0}}>
      <Collapse
        accordion={accordion}
        onChange={this.onChange}
        activeKey={activeKey}
      >
        {this.getItems()}
      </Collapse>
    </div>);
  }
}

export default Accordions;