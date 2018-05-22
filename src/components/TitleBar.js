import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { login } from '../actions/loginLogoutActions';
import { removeAll } from '../utility/localStorageUtility';
import { connect } from 'react-redux';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

// logout popmenu
const PopOverMenu = ({logout=e=>{} }) => <IconMenu
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
    <MenuItem primaryText="Sign out" onClick={logout} />
  </IconMenu>;

PopOverMenu.muiName = 'IconMenu';


class TitleBar extends Component {

  render() {
    const { fav } = this.props;
    return (
    <div>
        <div className="fixedbar">
        <AppBar
          className	="appbar"
          title=''
          iconElementLeft={<div style={{color : '#fff'}}>
            Fav: {fav.length}
          </div>}
          iconElementRight={<PopOverMenu logout={e=>{
            removeAll();
            this.props.login();
            this.props.history.replace('/');
          }} />}
        >
            
          </AppBar>
        </div>
        </div>
    );
  }
}

export default connect(state => ({ loginData: state.loginData, fav: state.fav }), { login })(TitleBar);

