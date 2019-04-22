import React, { Component, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './scss/app';

import Nav from './components/Nav';
import AddBlog from './components/AddBlog';
import BlogList from './components/BlogList';
import OneBlog from './components/OneBlog';
import Admin from './components/Admin';


export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);

        this.state = { blogs: [] };
    }

    async componentDidMount() {
        let r = await fetch('/api/blogs');
        let blogs = await r.json();
        this.setState({ blogs })
    }

    render () {
        return (
           <Router>
               <Fragment>
                    <Nav />

                    <Switch>
                        <Route exact path="/" component={BlogList} />
                        <Route exact path="/:id" component={OneBlog} />
                        <Route exact path="/admin" component={Admin} />
                        <Route />
                    </Switch>
               </Fragment>
           </Router>
        )
    }
}

interface IAppProps {

}

interface IAppState {
    blogs: Array<{title: string, content: string}>;
}