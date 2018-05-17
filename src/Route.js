import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { HashRouter, Switch } from 'react-router-dom';
import TitleBar from './components/TitleBar';
import Login from './components/Login';
import Pokemon from './components/Pokemon';
import PrivateRoute from './PrivateRoute';
import { Redirect } from 'react-router-dom';
import { login } from './actions/loginLogoutActions';
import { getToken } from './utility/localStorageUtility';


// defiend admin route
const AdminRoute = (props) => 
<div>
    <TitleBar {...props} />
    <div style={{paddingTop: '60px'}}>
    <Pokemon {...props} />
    </div>
</div>;

// defined root route
const RootApp = ({ login}) => {
    // set redux state for login detail from localstorage
    var token = getToken();    
    if(token && token != null)
    login({token});

    return (
        <HashRouter>
            <Switch>
                <Route path='/login' exact component={Login} />
                <PrivateRoute path='/' exact component={AdminRoute} />  
                <Redirect to={'/'} />           
            </Switch>
        </HashRouter>
    );
}

export default connect(null, { login })(RootApp);