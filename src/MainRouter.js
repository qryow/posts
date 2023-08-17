import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostsList from './components/PostsList';
import AuthorDetails from './components/AuthorDetails';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/author-details/:userId" element={<AuthorDetails />} />
    </Routes>
  );
};

export default MainRouter;