import React, { useContext } from "react";
import Post from "../Post";
import { DataContext } from "./../../context/dataContext";
import Table from "react-bootstrap/Table";

const DisplayPosts = () => {
  const context = useContext(DataContext);
  const posts = context.posts;
  return (
    <Table striped bordered hover variant="dark">
      <tbody>
        {posts.map((post) => {
          return (
            <tr key={post.title}>
              <td>
                <Post {...post} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default DisplayPosts;
