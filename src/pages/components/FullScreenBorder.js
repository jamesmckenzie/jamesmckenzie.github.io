import React from "react";
import styled from "styled-components";

const borderWidth = 15;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - ${borderWidth * 2}px);
  width: calc(100vw - ${borderWidth * 2}px);

  border: 20px solid green;
  border-image-source: linear-gradient(#3ec8ac, #4e90a4);
  border-image-slice: 20;
  border-width: ${borderWidth}px;
`;

const FullScreenBorder = ({ children }) => <Div>{children}</Div>;

export default FullScreenBorder;
