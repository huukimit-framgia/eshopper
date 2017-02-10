import React from 'react';
import autobind from 'react-autobind';
import {AppBar, FlatButton, Popover, Menu, MenuItem} from 'material-ui';

class Header extends React.Component {
    constructor(props) {
        super(props);
        autobind(this);

        this.state = {
            menuOpen: false
        };
    }

    openMenu() {
        this.setState({menuOpen: true});
    }

    closeMenu() {
        this.setState({menuOpen: false});
    }

    goToProfile() {
        this.props.router.push('/update-profile');
    }

    render() {
        let admin = this.context.auth.user;

        return (
            <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                iconElementLeft={
                    <div>
                        <FlatButton label={admin.first_name} onClick={this.openMenu.bind(this)}/>
                        <Popover
                            open={this.state.menuOpen}
                            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            onRequestClose={this.closeMenu.bind(this)}
                        >
                            <Menu>
                                <MenuItem
                                    primaryText={'Update profile'}
                                    innerDivStyle={{paddingLeft: '50px'}}
                                    style={{cursor: 'pointer'}}
                                    leftIcon={
                                        <i className="fa fa-key" style={{margin: '14px'}} aria-hidden="true"/>
                                    }
                                    onClick={this.goToProfile}
                                />
                                <MenuItem
                                    primaryText={'Log out'}
                                    innerDivStyle={{paddingLeft: '50px'}}
                                    href='/logout'
                                    leftIcon={
                                        <i className="fa fa-sign-out" style={{margin: '14px'}} aria-hidden="true"/>
                                    }
                                />
                            </Menu>
                        </Popover>
                    </div>
                }
                zDepth={0}
            />
        );
    }
}

export default Header;
