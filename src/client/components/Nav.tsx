import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component<INavProps, INavState> {
    constructor(props: INavProps) {
      super(props);
  
      this.state = {
        blogs: []
      };
    }
  
    render() {
      return (
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
        
          <Link to="/" className="btn btn-success mt-5 mx-5 mb-5">Blogs</Link>
          <Link to="/new" className="btn btn-outline-success mt-5 mx-5 mb-5">Add Blog</Link>
          
        </div>
      </nav>
      );
    }
  }
  
  interface INavProps {}
  
  interface INavState {
    blogs: { id: number; title: string; content: string }[];
  }