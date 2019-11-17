import React, { Component } from 'react'
import { FirebaseContext } from '../Firebase';

const withFirebase = WrappedComponent => props => (
    <FirebaseContext.Consumer>
        {firebase => <WrappedComponent {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
)

export default withFirebase 