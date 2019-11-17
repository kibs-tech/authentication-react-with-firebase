import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

class LogoutPageBase extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.props.firebase.logout();                
    }

    render() {
        return <Redirect to={ROUTES.HOME} />;
    }
    
}

  const LogoutPage = compose(
    withRouter,//not actually used at the mo
    withFirebase,
  )(LogoutPageBase);

  export default LogoutPage

