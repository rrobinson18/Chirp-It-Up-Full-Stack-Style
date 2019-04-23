import React, { Component, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './scss/app';

import Nav from './components/Nav';
import AddBlog from './components/AddBlog';
import BlogList from './components/BlogList';
import OneBlog from './components/OneBlog';
import Admin from './components/Admin';


export default class App extends React.Component<IAppProps, IAppState> {

    render () {
        return (
           <Router>
               <>
                    <Nav />

                    <Switch>
                        <Route exact path="/" component={BlogList} />
                        <Route exact path="/view/:id" component={OneBlog} />
                        <Route exact path="/admin" component={Admin} />
                        <Route exact path="/new" component={AddBlog} />
                    </Switch>
                    {/* <Footer /> */}
               </>
           </Router>
        )
    }
}

interface IAppProps { }

interface IAppState { }