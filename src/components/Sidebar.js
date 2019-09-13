import React, {Component} from 'react';
import NewKeg from './NewKeg'
import NewKegForm from './NewKegForm';


var sidebarStyle = {
  float: 'left',
  borderRadius: '10px',
  backgroundColor: 'coral',
  boxShadow: '15px',
  display: 'flex'
}

var sidebarText = {
  float: 'left',
  marginBottom: '20px'
}

export default class Sidebar extends Component {

    state = { showing: true };

    render() {
        const { showing } = this.state;
        return (
            <div>
                <div style={sidebarStyle} onClick={() => this.setState({ showing: !showing })}><button>Add Keg</button></div>
                { showing

                    ? <div style={sidebarText}></div>
                    : <NewKegForm/>
                }
            </div>
        )
    }
}
