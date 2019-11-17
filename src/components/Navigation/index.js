import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';
import LogoutButton from '../Logout'

const Navigation = ({ authUser }) => (
  <div>
   <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);


const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>      
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Protected Page</Link>      
    </li>
    <li>
      <Link to={ROUTES.LOGOUT}>Logout</Link>      
    </li>
    {/* <li>
      <LogoutButton />
    </li> */}
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>      
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Protected Page</Link>
    </li>    
    <li>
      <Link to={ROUTES.LOGIN}>Login</Link>
    </li>
    <li>
      <Link to={ROUTES.REGISTER}>Register</Link>
    </li>
  </ul>
);

export default Navigation;