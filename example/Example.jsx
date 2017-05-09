import { Router, Route, Link, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';

import './main.less';
import '../public/css/bootstrap.min.css';

import App from './App.jsx';
import  { ProgressBar }  from '../index';

const ProgressBarDemo = class extends React.Component {
    render() {
        let steps = ["step1", "step2", "step3", "step4"];
        console.log(ProgressBar);
        return (
            <ProgressBar steps={ steps } current={ 3 }/>
        );
    }
};

ReactDOM.render(
    <Router history={ browserHistory }>
        <Route path="/" component={ App }>
            <Route path="progressbar" component={ ProgressBarDemo }/>
        </Route>
    </Router>, document.getElementById('main'));