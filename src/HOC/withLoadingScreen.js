import React from "react";
import { MyBulletListLoader } from "./../helpers/loader";
import PropTypes from "prop-types";

const withLoadingScreen = (WrappedComponent, Loader = MyBulletListLoader) => {
    const LoadingScreen = (props) => {
      // render Content Loader
    if (props.isLoading===true) return <Loader />;
    return <WrappedComponent {...props} />;
  };

  LoadingScreen.propTypes = {
    isLoading: PropTypes.bool,
  };
  return LoadingScreen;
};

export default withLoadingScreen;
