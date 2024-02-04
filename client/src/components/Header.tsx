import React from "react";
import styled from "styled-components";
import mat1 from "../assets/mat1.jpg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LeftContainer = styled.div`
  height: 486px;
  width: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const RightContainer = styled.div`
  display: flex;
  height: 486px;
  flex-direction: column;
  width: 45%;
  section {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :nth-child(1) {
    img {
      width: 50%;
      max-height: 200px;
    }
  }

  :nth-child(2) {
    outline: 1px solid red;
    img {
      max-height: none;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <LeftContainer>
        <img src={mat1} alt="" />
      </LeftContainer>

      <RightContainer>
        <section>
          <img src={mat1} alt="" />
          <img src={mat1} alt="" />
        </section>

        <section>
          <div style={{ width: "100%", height: "270px" }}>
            <img src={mat1} alt="" />
          </div>
        </section>
      </RightContainer>
    </Container>
  );
};

export default Header;
