import React, { PropTypes, Component } from 'react';

import  { ProgressBar }  from 'react-components';
import Layout from '../Layout.jsx';

export default class ProgressBarDemo extends Component {

    render() {
        let steps = ["step1", "step2", "step3", "step4"];
        return (
            <Layout title="流程进度条">
                <p>
                    <span>1. 默认流程进度条:</span>
                    <div className="bs-example" data-example-id="simple-pre">
                        <ProgressBar steps={ steps } current={ 3 }/>
                        <pre> { '<ProgressBar steps={ steps } current={ 3 }/>' } </pre>
                    </div>
                </p>
            </Layout>
        );
    }
}