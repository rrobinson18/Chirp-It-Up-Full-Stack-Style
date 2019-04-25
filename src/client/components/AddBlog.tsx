import React, { Component, Fragment } from 'react';
import { RouteComponentProps } from 'react-router-dom';



 export default class AddBlog extends React.Component<IAddBlogProps, IAppBlogState> {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            selectedTag: '0',
            tags: []
        }
    }

    async componentDidMount() {
        try {
            let r = await fetch('/api/tags');
            let tags = await r.json();
            this.setState({ tags });
        } catch (err) {
            console.log(err);
        }
    }


     updateContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ content: e.target.value });
    }

    updateSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedTag: e.target.value });
    }


    updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ title: e.target.value });
    }

    addBlog = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let body = { 
            title: this.state.title, 
            content: this.state.content,
            authorid: 1,
            tagid: this.state.selectedTag
             };
        try {
            await fetch('/api/blogs/', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    "Content-type": "application/json"
                }
            });
            this.setState({ title: "", content: "" });
            this.props.history.push('/');
        } catch (error) {
            console.log(error);
        }
    }    
    
render() {
    return (
        <Fragment>
        <div className="container">
                <div className="form-group m-2">
                    <form className="p-4 bg-light border border-dark rounded">
                        <label className="font-weight-bold">Blog Title </label>
                        <input type="text" value={this.state.title} onChange={ this.updateTitle}
                            className="form-control" id="blog-title"
                            placeholder="Blog Title" />
                        <label className="font-weight-bold">Blog Tag</label>
                        <select value={this.state.selectedTag} onChange={this.updateSelect} className="form-control">
                            <option value="0">Select a tag...</option>
                            {this.state.tags.map(tag => (
                                <option key={tag.id} value={tag.id}>{tag.name}</option>
                            ))}
                        </select>
                        <label className="font-weight-bold">Blog Text</label>
                        <input className="form-control" value={this.state.content} id="blog-text" onChange={ this.updateContent }
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
        selectedTag: string;
        tags: {
            id: number,
            name: string,
            _created: Date
        }[]
    }