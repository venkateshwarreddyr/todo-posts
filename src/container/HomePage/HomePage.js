import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import DisplayPosts from "../../component/DisplayPosts";
import { DataContext } from "../../context/dataContext";

const HomePage = () => {
const context = useContext(DataContext);
  return (
    <>
      <Container data-testid='homepage'>
        <DisplayPosts isLoading={context.loading} />
      </Container>
    </>
  );
};

export default HomePage;
