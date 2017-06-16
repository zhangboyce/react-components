import React, { Component } from 'react';
import { Link } from 'react-router';
import * as demos from './demo';

export default class Layout extends Component {

    __classnames__ = title => {
        return this.props.title === title ? 'active': '';
    };

    __highlight_code__ = () => {
        $(document).ready(function() {
            hljs.tabReplace = '  ';
            $('pre code').each(function(i, block) {
                hljs.highlightBlock(block);
            });
        });
    };
    render () {
        this.__highlight_code__();

        let linkComps = Object.keys(demos).map(k => {
            return (
                <li className={ this.__classnames__(k) } key={ k }>
                    <Link to={ k.replace('Demo', '').toLowerCase() }>{ k.replace('Demo', '') }</Link>
                </li>
            );
        });

        return (
            <div className="container-fluid main">
                <div className="row header">
                    <div className="col-md-12">
                        <h4>{ this.props.title }</h4>
                    </div>
                </div>
                <hr />
                <div className="row content">
                    <div className="col-md-9">
                        { this.props.children }
                    </div>
                    <div className="col-md-2">
                        <ul className="list-unstyled">
                            { linkComps }
                        </ul>
                    </div>
                </div>
                <div className="footer">
                    <div className="row">
                        <div className="col-md-6">
                            <span>source code: </span>
                            <a href="https://github.com/zhangboyce/react-components" target="_blank">
                                https://github.com/zhangboyce/react-components
                            </a>
                        </div>
                        <div className="col-md-6">
                            <span>email: </span>
                            <span>zhangboyce@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}