import * as React from "react";
import * as moment from "moment";
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
  tags: { name: string; }[];
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
      },
      tags: []
    };
  }

  async componentDidMount() {
    fetch(`/api/blogs/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(blog => {
        this.setState({ blog })
      })
      .catch(error => console.log(error));
      fetch(`/api/blogtags/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(tags => this.setState({ tags }));
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">{this.state.blog.title}</h1>
          <h6> {this.state.blog.authorid}</h6>
          <div>
            {this.state.tags.map((tag, index) => <span key={index} className="badge badge-info p-2 my-1 mx-2">{tag.name}</span>)}
          </div>
          <h6>{moment(this.state.blog._created).format("MMM Do, YYYY")}</h6>
          <p>{this.state.blog.content}</p>
          <Link
            to={`/${this.props.match.params.id}/admin`}
            className="btn btn-outline-info mt-2">Edit Blog
          </Link>
          <Link to="/" className="btn btn-outline-dark mt-2">Edit Blog
          </Link>
        </div>
      </div>
    );
  }
}
