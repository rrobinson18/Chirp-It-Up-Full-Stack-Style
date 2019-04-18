import React from 'react';
import { RouteComponentProps } from 'react-router-dom';



export default class AddBlog extends React.Component<IAddBlogProps, IAppBlogState> {
    constructor(props: IAddBlogProps) {
        super(props);

        this.state = {
            title: '',
            content: ''
        }
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
        <div className="container">
            <div className="row my-2">
                <div className="col-md-12">
                    <form className="form-group p-3 border border-warning rounded">
                        <label>Blog Title </label>
                        <input
                            onChange={ this.updateTitle}
                            className="p-1 form-control"
                            placeholder="Your username ..." />
                        <label>Blog Text: </label>
                        <input
                            onChange={ this.updateContent }
                            className="p-1 form-control"
                            placeholder="Type here ..." />
                        <button onClick={ this.addBlog } className="btn btn-lg btn-primary mt-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        );
    }   
}



    interface IAddBlogProps extends RouteComponentProps { }

    interface IAppBlogState{
        title: string;
        content: string;
    }