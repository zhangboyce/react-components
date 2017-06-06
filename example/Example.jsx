import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './public/css/main.less';
import './public/css/bootstrap.docs.css';

import ProgressBarDemo from './demo/ProgressBarDemo.jsx';
import RowInputDemo from './demo/RowInputDemo.jsx';
import FormGroupDemo from './demo/FormGroupDemo.jsx';
import TagDemo from './demo/TagDemo.jsx';
import SearchDemo from './demo/SearchDemo.jsx';

ReactDOM.render(
    <Router history={ browserHistory }>
        <Route path="/" component={ ProgressBarDemo }/>
        <Route path="progressbar" component={ ProgressBarDemo } />
        <Route path="rowinput" component={ RowInputDemo } />
        <Route path="formgroup" component={ FormGroupDemo } />
        <Route path="tag" component={ TagDemo } />
        <Route path="search" component={ SearchDemo } />

    </Router>, document.getElementById('main'));