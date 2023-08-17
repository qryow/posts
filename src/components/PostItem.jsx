import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  return (
    //<li>
    //  <h4>{post.title}</h4>
    //  <p>{post.body}</p>
    //  <Link to={`/author-details/${post.userId}`}>Author</Link>
    //</li>
    <>
      <div id='mainContainer'>
        <div id="card-content">
          <h2 id="header">{post.title}</h2>

          <p id="body">{post.body}</p>

          <Link className='readmore' to={`/author-details/${post.userId}`}>
            <button id="readmore">About author</button>
          </Link>

        </div>
      </div>
    </>
  );
};

export default PostItem;