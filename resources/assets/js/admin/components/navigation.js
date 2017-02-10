import React from 'react';
import autobind from 'react-autobind';
import {Drawer, Paper, Menu, MenuItem, Divider} from 'material-ui';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        autobind(this);

        this.state = {
            open: true
        };
    }

    render() {
        let open = this.state.open;

        return (
            <Paper className="sidebar-wrapper" zDepth={1}>
                <Drawer open={open}>
                    <div className="nav-wrapper">
                        <div className="logo">
                            <div className="logo-image"/>
                        </div>

                        <div className="nav">
                            <Menu className="nav-content">
                                <MenuItem primaryText="Preview"/>
                                <MenuItem primaryText="Share"/>
                                <MenuItem primaryText="Get links"/>
                                <Divider/>
                                <MenuItem primaryText="Make a copy"/>
                                <MenuItem primaryText="Download"/>
                                <Divider/>
                                <MenuItem primaryText={<a href="/logout">Logout</a>}/>
                            </Menu>
                        </div>
                    </div>
                </Drawer>
            </Paper>
        );
    }
}

export default Navigation;
