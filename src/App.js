import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        <span aria-label="emojis" role="img">
                            🦄
                        </span>
                        {} Talker {}
                        <span aria-label="emojis" role="img">
                            🦄
                        </span>
                        <br />
                        Applications for reading text with a voice engine.
                        <br />
                        Made using - Electron.js, React.js, Speech Synthesis
                        API.
                    </p>
                </header>
            </div>
        );
    }
}

export default App;
