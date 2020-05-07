import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import User from "../../component/User";
import { DataContext } from './../../context/dataContext';

const UserPage = ({ match }) => {
  const userId = Number(match.params.userId);
  const [user, setUser] = useState({});

  const context = useContext(DataContext);
  useEffect(() => {
      const userDetails = context.users.find((user) => user.id === userId);
      setUser(userDetails);
  }, [context.users, userId]);
  
  return (
    <>
      <Container>
        <User {...user} isLoading={context.loading} />
      </Container>
    </>
  );
};

UserPage.propTypes = {
  match: PropTypes.object,
};
export default UserPage;
