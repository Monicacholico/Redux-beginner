
import React from 'react';
import {render} from 'react-dom';

import css from './styles/style.styl';

import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//import react router deps

import { Router, Route, IndexRoute, browserHIstory} from 'react-router';

const router = (
    <Router history={browserHIstory}>
        <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
        </Route>
    </Router>
)

render(router, document.getElementById('root'));

