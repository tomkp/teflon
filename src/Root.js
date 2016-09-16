import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import 'babel-polyfill';

import './styles.scss';

import Application from './layout/application/Application';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Repos from './pages/repos/Repos';
import Repo from './pages/repo/Repo';


render((
    <Router history={browserHistory}>

        <Route path='/' component={Application}>

            <IndexRoute component={Home} />

            <Route path='/about' component={About}/>

            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>

        </Route>

    </Router>
), document.getElementById('root'));
