import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchPosts, fetchUsers } from "./../helpers/fetchDetails";

export const DataContext = createContext({
  loading: false,
  posts: [],
  users: [],
  isUpdated: false,
  setIsUpdated: () => {},
});

const DataContextProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
      Promise.all([fetchPosts(), fetchUsers()])
        .then(([posts, users]) => {
          const postsDetails = posts.map((post) => {
            const user = users.find((user) => user.id === post.userId);
            post.userName = user.name;
            return post;
          });
          setPosts(postsDetails);
          setUsers(users);
        }).finally(()=>setLoading(false))
    }, []);

  return (
    <DataContext.Provider value={{ posts, users, isUpdated, setIsUpdated, loading }}>
      {props.children}
    </DataContext.Provider>
  );
};
DataContextProvider.propTypes = {
  children: PropTypes.object,
};

export default DataContextProvider;
