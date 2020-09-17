import React from 'react';

import classes from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <p>
                © 2020 | READ.OK | Created by Dmitriy Zatulovskiy |{' '}
                <a
                    href="https://github.com/GrafSoul/react-speech-synthesis"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
            </p>
        </footer>
    );
};

export default Footer;
