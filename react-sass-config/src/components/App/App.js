// vendor
import React from 'react';

// components
import TestComponent from '../TestComponent';

// resources
import './app.scss';
import image from '../../images/jazz.jpg';

const App = () => {
    return (
        <div className="spot-app">
            <TestComponent />
            <div className="component2 fa fa-pencil">component2</div>
            <img src={image} alt="3 cool jazz guys" width="300px"/>
        </div>
    );
}

export default App;