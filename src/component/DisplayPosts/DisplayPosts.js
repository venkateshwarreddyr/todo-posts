import React, {useContext} from "react";
import Post from "../Post";
import { DataContext } from './../../context/dataContext';

const DisplayPosts = () => {
const context = useContext(DataContext);
const posts = context.posts
  const postsList=  posts.map((post) => {
    return <Post key={post.title} {...post} />;
  });
  return postsList;
};


export default DisplayPosts;
