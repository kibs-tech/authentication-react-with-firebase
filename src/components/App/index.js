
import React  from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


import { withAuthentication } from '../Session';
import Main from './Main';
import Header from '../Header'




const App = () => (

  <Router>
    <Header />
    <Main />
  </Router>

);






export default withAuthentication(App);