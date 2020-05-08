import React, { useContext } from "react";
import Post from "../Post";
import { DataContext } from "./../../context/dataContext";
import ListGroup from "react-bootstrap/ListGroup";
import './DisplayPosts.css';

const DisplayPosts = () => {
  const context = useContext(DataContext);
  const posts = context.posts;
  return (
    <ListGroup variant="flush">
      {posts.map((post, i) => {
        return (
          <ListGroup.Item key={post.title} variant={i % 2 ? "dark" : "secondary"} >
            <Post {...post} />
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default DisplayPosts;
