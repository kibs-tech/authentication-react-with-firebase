import React from 'react';

import { Jumbotron } from 'bootstrap-4-react'

const jumbotronStyle = {
    width: '100%', textAlign: 'center'
}


const Descriptor = () => (
    <Jumbotron fluid style={jumbotronStyle}>
        <h1>Authentication with React and Firebase </h1>
        <p>Used: React, Firebase, React-Bootstrap</p>
    </Jumbotron>
)


export default Descriptor;