import React, { PropTypes, Component } from 'react';

import  { Tip, Tips }  from 'react-components';
import Layout from './../Layout.jsx';
import DP from './DP.jsx';

export default class TipDemo extends Component {

    render() {
        return (
            <Layout title="TipDemo">
                <DP title="1. 普通Icon:">
                    <Tips separated>
                        <Tip className="fa fa-eye" tip={ 3131313 } />
                        <Tip className="fa fa-file-code-o" tip={ 10000 } overflowCount={ 100001 } />
                        <Tip className="fa fa-comment-o" tip="12313" />
                        <Tip className="fa fa-reply-all" tip="531131923" />
                    </Tips>
                </DP>

            </Layout>
        );
    }
}