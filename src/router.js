import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';


export default (
    <BrowserRouter>
        <div>
            <Route exact path='/' component={ Landing } />
            <Route path='/contact' component={ Contact }/>
            <Route path='/projects' component={ Projects }/>
        </div>
    </BrowserRouter>
)