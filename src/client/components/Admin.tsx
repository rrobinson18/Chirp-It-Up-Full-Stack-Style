import React from 'react';
import { RouteComponentProps } from 'react-router-dom';


export default class Admin extends React.Component<IAdminProps, IAdminState> {
    constructor(props: IAdminProps) {
        super(props);

        this.state = {
            title: '',
            content: ''
        }
    }

    async componentDidMount() {
        try {
            let r = await fetch(`/api/blogs/${this.props.match.params.id}`);
            let blog: { title: string, content: string } = await r.json();
            this.setState({title: blog.title, content: blog.content});
        } catch (error) {
            console.log(error);
        }
    }

    handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ content: e.target.value });
    }


    handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ title: e.target.value });
    }

    handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let body = { content: this.state.content, title: this.state.title };
        try {
            await fetch(`/api/blogs/${this.props.match.params.id}`, {
                method: 'PUT',
                body: JSON.stringify(body),
                headers: {
                    "Content-type": "application/json"
                }
            });
            this.props.history.push('/');
        } catch (error) {
            console.log(error);
        }
    }   

    handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            await fetch(`/api/blogs/${this.props.match.params.id}`, {
                method: 'DELETE'
            });
            this.props.history.push('/');
        } catch (error) {
            console.log(error);
        }
    }
    
render() {
    return (
        <div className="container">
            <div className="row my-2">
                <div className="col-md-12">
                    <form className="form-group p-3 border border-dark rounded">
                        <label>Title: </label>
                        <input
                            value={this.state.title}
                            onChange={ this.handleTitle}
                            className="p-1 form-control"
                            placeholder="Title ..." />
                        <label>Blog Message: </label>
                        <input
                            value={this.state.content}
                            onChange={ this.handleMessageChange }
                            className="p-1 form-control"
                            placeholder="Type here ..." />
                        <button onClick={ this.handleEdit } className="btn btn-lg btn-primary mt-2">Save Edit!</button>
                        <button onClick={ this.handleDelete } className="btn btn-lg btn-danger mt-2">Delete!</button>
                    </form>
                </div>
            </div>
        </div>
        );
    }   
}



    interface IAdminProps extends RouteComponentProps<{ id: string; }> { }

    interface IAdminState {
        title: string;
        content: string;
    }