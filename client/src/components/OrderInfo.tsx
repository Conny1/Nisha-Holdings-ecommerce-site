import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  outline: 1px solid red;
  position: absolute;
  /* left: 10px; */
  background-color: #fd0000;
  color: #fff;
  border-radius: 5px;
  padding: 5px;

  button {
    position: absolute;
    left: 40%;
    background-color: #ffff;
    color: #fd0000;
    border: none;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
const Number = styled.div`
  text-align: center;
  h1 {
    font-size: 15px;
    margin-top: 30px;
  }
  p {
    font-size: 18px;
  }
`;

type Props = {
  setorder: React.Dispatch<React.SetStateAction<boolean>>;
};

const OrderInfo = ({ setorder }: Props) => {
  return (
    <Container>
      <button onClick={() => setorder(false)}>close</button>
      <Number>
        <h1>Call the given Number To make an Order</h1>
        <p>0114116265</p>
      </Number>
    </Container>
  );
};

export default OrderInfo;
