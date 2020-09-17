import React, { Component } from 'react';

import Talker from './Talker/Talker';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Talker />
                <Footer />
            </>
        );
    }
}

export default App;
