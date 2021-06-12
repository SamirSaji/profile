import React from "react";
import styled from "styled-components/macro";

const Email = styled.div`
  color: black;
  font-weight: 700;
  padding-bottom: 5px;
  border-bottom: 2px solid black;
  display: inline-block;
  transition: border-bottom 0.2s;

  :hover {
    border-bottom: 2px solid transparent;
  }
`;

function ContactEmail() {
  return (
    <>
      <a href="tel: +919750937070">
        <Email>+91 97509 37070</Email>
      </a>
      <br />
      <br />
      <a href="mailto: samirsaji13@gmail.com">
        <Email>samirsaji13@gmail.com</Email>
      </a>
    </>
  );
}

export default ContactEmail;
