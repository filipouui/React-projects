import React from "react";
import PropTypes from "prop-types";
import { StyledMessage } from "../style/style";

const Message = ({ msg }) => {
  return <StyledMessage>{msg}</StyledMessage>;
};

Message.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Message;
