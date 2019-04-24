import * as React from "react";
import { Link } from "react-router-dom";


export interface BlogCardProps {
  blog: { 
    id: number; 
    title: string; 
    content: string; 
    authorid: number; 
    _created: Date
   };
}

const BlogCard: React.SFC<BlogCardProps> = props => {
  return (
    <div className="col-md-6">
      <div className="card m-2 border border-info">
        <div className="card-body">
          <div className="card-title font-weight-bold border border-dark border-top-0 border-left-0 border-right-0">
            {props.blog.title} </div>
            <div>
            {this.state.tags.map((tag, index) => <span key={index} className="badge badge-info p-2 my-1 mx-2">{tag.name}</span>)}
          </div>
            <div className="card-date font-weight-bold">{props.blog._created}</div>
            <p className="card-text">{props.blog.content.substring(0, 100)}...</p>
            <Link to={`/view/${props.blog.id}`} className="btn btn-outline-info mt-2">View Blog</Link>
         
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
