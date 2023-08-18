import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthors } from '../store/postsSlice';
import { useParams } from 'react-router-dom';

const AuthorDetails = () => {
  const { authors } = useSelector(state => state.posts);
  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getAuthors());
  }, []);

  const user = authors ? authors.find(user => user.id.toString() === userId) : null;

  if (!user) {
    return null;
  }

  return (
    //<div>
    //  <h2>Author Details</h2>
    //  <p>Name: {user.name}</p>
    //  <p>Email: {user.email}</p>
    //</div>
    <>
      <div id='mainContainer2'>
        <div id="aside">
          <div id="cardview"></div>
        </div>
        <div id="card-content2">
          <ul>
            <h2 id='cardtitle'>{user.name}</h2>
            <p id='cardtext'>{user.username}</p>
            <p id='cardtext'> {user.email}</p>
          </ul>

        </div>
      </div>
    </>
  );
};

export default AuthorDetails;
