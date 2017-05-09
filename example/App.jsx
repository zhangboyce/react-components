'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
    render () {
        return (
            <div className="container-fluid main">
                { this.props.children || (
                    <div className="home">
                        Welcome to react-components.
                        <p>
                            <Link to="progressbar">progress-bar</Link>
                            <span className="promote-letter">流程进度条。</span>
                        </p>
                    </div>
                )}
            </div>
        );
    }
}
