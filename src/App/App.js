import React, { Component } from 'react';

import Aux from './hoc/AuxComponent/AuxComponent';
import Header from './components/Header/Header';
import Talker from './components/Talker/Talker';

class App extends Component {
    render() {
        return (
            <Aux>
                <Header />
                <Talker />
            </Aux>
        );
    }
}

export default App;
