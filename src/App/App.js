import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import Talker from './Talker/Talker';

class App extends Component {
    render() {
        return (
            <Layout>
                <Talker />
            </Layout>
        );
    }
}

export default App;
