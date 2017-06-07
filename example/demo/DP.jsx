import React, { Component } from 'react';

export default class DP extends Component {

    render () {
        return (
            <p>
                <span>{ this.props.title }</span>
                <div className="bs-example" data-example-id="simple-pre">
                    <div style={ { border: '1px dashed rgb(226, 226, 226)' } }>
                        { this.props.children }
                    </div>
                    <pre>{ this.props.code }</pre>
                </div>
            </p>
        );
    }
}