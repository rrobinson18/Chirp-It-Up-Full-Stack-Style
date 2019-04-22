import React, { Component, Fragment } from 'react';
import { RouteComponentProps } from 'react-router-dom';



 export default class AddBlog extends React.Component<IAddBlogProps, IAppBlogState> {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: ''
        }
        
    this.addBlog = this.addBlog.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateContent = this.updateContent.bind(this);
    }


    updateContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ content: e.target.value });
    }


    updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ title: e.target.value });
    }

    addBlog = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let body = { title: this.state.title, content: this.state.content };
        try {
            await fetch('/api/blogs/', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    "Content-type": "application/json"
                }
            });
            this.props.history.push('/');
        } catch (error) {
            console.log(error);
        }
        this.setState({ title: "", content: "" });
    }    
    
render() {
    return (
        <Fragment>
        <div className="container">
                <div className="form-group m-2">
                    <form className="m-4 bg-light border border-dark rounded">
                        <label className="font-weight-bold">Blog Title </label>
                        <input type="text" onChange={ this.updateTitle}
                            className="form-control" id="blog-title"
                            placeholder="Blog Title" />
                        <label className="font-weight-bold">Blog Text</label>
                        <input
                            onChange={ this.updateContent }
                            className="form-control" id="blog-text"
                            placeholder="Type here ..." />
                        <button onClick={ this.addBlog } className="btn btn-primary m-2">Submit</button>
                    </form>
                </div>
            </div>
            </Fragment>
        );
    }   
}



    interface IAddBlogProps extends RouteComponentProps { }

    interface IAppBlogState{
        title: string;
        content: string;
    }