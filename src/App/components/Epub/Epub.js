import React, { Component } from 'react';
import { ReactReader } from 'react-reader';

class Epub extends Component {
    render() {
        return (
            <div style={{ position: 'relative', height: '100%' }}>
                {' '}
                // * Container needs a height..
                <ReactReader
                    url={'./Gatsbyjs.epub'}
                    title={'Alice in wonderland'}
                    location={'epubcfi(/6/2[cover]!/6)'}
                    locationChanged={(epubcifi) => console.log(epubcifi)}
                />
            </div>
        );
    }
}

export default Epub;
