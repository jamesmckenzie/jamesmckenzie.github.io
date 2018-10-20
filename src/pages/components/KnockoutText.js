import React from "react";
import styled from "styled-components";

const borderWidth = 15;

const H1 = styled.h1`
  // background: #74ebd5;
  // background: -webkit-linear-gradient(left, #3ec8ac 0%, #4e90a4 100%),
  //   -webkit-linear-gradient(left, #3ec8ac 0%, #4e90a4 100%);
  // background: linear-gradient(to right, #3ec8ac 0%, #4e90a4 100%),
  //   linear-gradient(to right, #3ec8ac 0%, #4e90a4 100%);
  // color: red;
  // -webkit-text-fill-color: transparent;
  // -webkit-background-clip: text;

  // font-weight: bold;
  // font-size: 6rem;
  // font-family: Lato, arial, helvetica;

  // text-align: center;
  // margin: 0 20px !important;
  // padding: 5px 8px;

  // letter-spacing: -5px;
`;

const KnockoutText = ({ children }) => (
  <H1
    style={{
      fontSize: "96px",
      fontFamily: "Lato"
    }}
  >
    {children}
  </H1>
);

export default KnockoutText;
