import React, {Component} from 'react';

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
                <button style={sidebarStyle} onClick={() => this.setState({ showing: !showing })}>Add a Keg</button>
                { showing

                    ? <div style={sidebarText}>This is visible</div>
                    : null
                }
            </div>
        )
    }
}
