import { styled } from "styled-components";
import pic from "../assets/mat1.jpg";
import { useState } from "react";
import OrderInfo from "./OrderInfo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  justify-content: center;
  align-items: center;
`;
const Productimage = styled.div`
  width: 100%;
  height: 40%;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Productinfo = styled.div`
  width: 100%;
  p {
    text-transform: uppercase;
    font-weight: bold;
  }
  button {
    width: 100%;
    background-color: #fd0000;
    color: white;
    border: none;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Product = () => {
  const [order, setorder] = useState(false);
  return (
    <Container>
      <Productimage>
        <img src={pic} alt="" />
      </Productimage>
      <Productinfo>
        <p>Poa sasa matress</p>
        <br />
        <span>Category: Matress</span> <br />
        <span>size:3 by 4</span>
        <br />
        <span>Quantity: 10</span>
        <button onClick={() => setorder(true)}>Order</button>
      </Productinfo>
      {order && <OrderInfo setorder={setorder} />}
    </Container>
  );
};

export default Product;
