import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
import ListIncident from './pages/ListIncident';
import ShowIncident from './pages/ShowIncident';




export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
                
                <Route exact path="/incidents" component={ListIncident} />
                <Route path="/incidents/show/:id" component={ShowIncident} />


            </Switch>
        </BrowserRouter>
    );
}

