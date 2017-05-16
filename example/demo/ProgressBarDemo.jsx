import React, { PropTypes, Component } from 'react';

import  { ProgressBar }  from 'react-components';
import Layout from '../Layout.jsx';

export default class ProgressBarDemo extends Component {

    render() {
        let steps = ["step1", "step2", "step3", "step4"];
        return (
            <Layout title="流程进度条">
                <ProgressBar steps={ steps } current={ 3 }/>
            </Layout>
        );
    }
}