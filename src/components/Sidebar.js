import React, {Component} from 'react';
import NewKeg from './NewKegMain'

var sidebarStyle = {
  float: 'left',
  borderRadius: '10px',
  backgroundColor: 'coral',
  boxShadow: '15px'
}

var sidebarText = {
  float: 'left'
}

export default class Sidebar extends Component {

    state = { showing: true };

    render() {
        const { showing } = this.state;
        return (
            <div>
                <button style={sidebarStyle} onClick={() => this.setState({ showing: !showing })}><NewKeg/>Add a Keg</button>
                { showing

                    ? <div style={sidebarText}>Add keg form</div>
                    : null
                }
            </div>
        )
    }
}
