import React, { useEffect } from 'react'
import PostItem from './PostItem'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../store/postsSlice'

const PostsList = () => {
  const { posts, error, loading } = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, []);

  return (
    <>
      {error ? (
          <div>
            <h3>Something went whong</h3>
            <h4>{ error }</h4>
          </div>
        ) :(
          <div id="container">
            <div id='wrapper'>
              {loading && <h3>Loading...</h3>}
              {posts.map(post => (
                <PostItem key={post.id} post={post} />
              ))}
            </div>
          </div>
          
        )
      }
    </>
  )
}

export default PostsList
