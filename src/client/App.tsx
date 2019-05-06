import React, { Component, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './scss/app';

import Nav from './components/public/Nav'
import AddBlog from './components/public/AddBlog';
import BlogList from './components/public/BlogList';
import OneBlog from './components/public/OneBlog';
import Admin from './components/admin/Admin';
import Login from './components/admin/Login';


export default class App extends React.Component<IAppProps, IAppState> {

    render () {
        return (
           <Router>
               <>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={BlogList} />
                        <Route exact path="/view/:id" component={OneBlog} />
                        <Route exact path="/:id/admin" component={Admin} />
                        <Route exact path="/new" component={AddBlog} />
                        <Route exact path="/login" component={Login} />
                    </Switch>
                    {/* <Footer /> */}
               </>
           </Router>
        )
    }
}

interface IAppProps { }

interface IAppState { }