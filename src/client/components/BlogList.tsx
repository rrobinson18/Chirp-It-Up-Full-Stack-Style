import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';


export default class Card extends React.Component<IBlogListProps, IBlogListState> {
    constructor(props: IBlogListProps) {
        super(props);

        this.state = {
            blogs: [],
    }; 
}

async componentDidMount() {
    fetch('/api/blogs', {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'application/json' })
    })

    .then(response => response.json())
    .then(object => {
      let blogs = object.map((blog) => {
        return (
          <BlogCard 
          key={blog.id}
          blog={blog}
          />
        )
      })
      this.setState({ blogs })
    })
    .catch(err => console.log(err));
  }

  render() {
    return(
      <Fragment>
        <div className="container">
        <div className="row">
          {this.state.blogs}
        </div>
        </div>
      </Fragment>
    )
  }
}

interface IBlogListProps {}

interface IBlogListState {
    blogs: { 
        id: string; 
        title: string; 
        content: string;
        _created: number }[];
}