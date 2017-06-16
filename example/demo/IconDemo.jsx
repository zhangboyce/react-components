import React, { PropTypes, Component } from 'react';

import  { Icon }  from 'react-components';
import Layout from './../Layout.jsx';
import DP from './DP.jsx';

export default class IconDemo extends Component {

    render() {
        return (
            <Layout title="Icon">
                <DP title="1. 普通Icon:">
                    <Icon className=""/>
                    <Icon className=""/>
                    <Icon className=""/>
                </DP>

            </Layout>
        );
    }
}