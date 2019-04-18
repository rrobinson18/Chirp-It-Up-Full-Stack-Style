import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { string } from 'prop-types';
import { json } from 'body-parser';


export default class AddBlog extends React.Component<IOneBlogProps, IOneBlogState> {
    constructor(props: IOneBlogProps) {
        super(props);
        this.state = {
           blog: []
    }
}

    async componentDidMount() {
        let j = await fetch('/api/blogs/:id');
        let blog = await j.json();
        this.setState
    }

    render() {
        return (
            <div className="row">
            <div className="col-md-12">
            <h1 className="text-center">{this.state.blog.title}</h1>
            </div>
            </div>
        )
    }
}






interface IOneBlogProps extends RouteComponentProps { }

interface IOneBlogState {
    title: string;
    content: string;
}