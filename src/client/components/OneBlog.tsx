import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Link } from 'react-router-dom';


interface IOneBlogProps extends RouteComponentProps<{ id: string }> { }

export interface IOneBlogState {
  blog: {
    title: string;
    content: string;
    authorid: number;
    _created: Date;
  };
}

export default class OneBlog extends React.Component<
  IOneBlogProps,
  IOneBlogState
> {
  constructor(props: IOneBlogProps) {
    super(props);
    this.state = {
      blog: {
        title: null,
        content: null,
        authorid: null,
        _created: null
      }
    };
  }

  async componentDidMount() {
    fetch(`/api/blogs/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(blog => {
        this.setState({ blog })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">{this.state.blog.title}</h1>
          <h6>Author: {this.state.blog.authorid}</h6>
          <h6>{this.state.blog._created}</h6>
          <p>{this.state.blog.content}</p>
          <Link
            to={`/id/${this.props.match.params.id}`}
            className="btn btn-outline-info mt-2">Edit Blog
          </Link>
        </div>
      </div>
    );
  }
}
