import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './public/css/main.less';
import './public/css/bootstrap.docs.css';
import '../public/vendor/bootstrap/dist/css/bootstrap.min.css';
import '../public/vendor/font-awesome/css/font-awesome.min.css';

import ProgressBarDemo from './demo/ProgressBarDemo.jsx';
import RowInputDemo from './demo/RowInputDemo.jsx';
import FormGroupDemo from './demo/FormGroupDemo.jsx';

ReactDOM.render(
    <Router history={ browserHistory }>
        <Route path="/" component={ ProgressBarDemo }/>
        <Route path="progressbar" component={ ProgressBarDemo } />
        <Route path="rowinput" component={ RowInputDemo } />
        <Route path="formgroup" component={ FormGroupDemo } />

    </Router>, document.getElementById('main'));