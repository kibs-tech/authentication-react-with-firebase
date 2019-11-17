import React from 'react';
import { Route } from 'react-router-dom';

import Descriptor from './Descriptor';
import * as ROUTES from '../../constants/routes';

import PrivateRoute from '../Route/PrivateRoute';

import Navigation from '../Navigation';
import RegisterPage from '../Register';
import LoginPage from '../Login';
import LogoutPage from '../Logout';
import AccountPage from '../Account';
import HomePage from '../Home';


const Main = () => (

    <div className="container-fluid">
      <div className="row ">
        <Descriptor />
      </div>
      <div className="flex-xl-nowrap row">
        <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
          <Navigation />
        </div>
        <div className="col-12 col-md-9 col-xl-8 pl-md-5 py-md-3">
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.REGISTER} component={RegisterPage} />
          <Route path={ROUTES.LOGIN} component={LoginPage} />
          <Route path={ROUTES.LOGOUT} component={LogoutPage} />
          <PrivateRoute path={ROUTES.ACCOUNT} component={AccountPage} />
        </div>
      </div>
    </div>
  )


  export default Main;