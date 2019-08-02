import React from "react";
import PropTypes from "prop-types";

/** Simple HelloWorld component to demonstrate doc gen */
const HelloWorld = ({ message }) => {
  return <h1>Hello {message}</h1>;
};

HelloWorld.propTypes = {
  /** Message to display */
  message: PropTypes.string.isRequired
};

HelloWorld.defaultProps = {
  message: "World!"
};

export default HelloWorld;
