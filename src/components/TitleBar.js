import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { login } from '../actions/loginLogoutActions';
import { removeAll } from '../utility/localStorageUtility';
import { connect } from 'react-redux';

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
    return (
    <div>
        <div className="fixedbar">
        <AppBar
          className	="appbar"
          title='Home'
          iconElementLeft={<IconButton></IconButton>}
          iconElementRight={<PopOverMenu logout={e=>{
            removeAll();
            this.props.login();
            this.props.history.replace('/');
          }} />}
        />
        </div>
        </div>
    );
  }
}

export default connect(state=>({ loginData: state.loginData }), { login })(TitleBar);