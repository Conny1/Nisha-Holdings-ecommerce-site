import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Logo = styled.div`
  width: 180px;
  h1 {
    font-size: 20px;
    text-align: center;
    font-weight: 500;
    color: #fd0000;
    text-transform: uppercase;
  }
`;
const Products = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;

  button {
    width: 100px;
    padding: 5px;
    background-color: #fd0000;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
const Links = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 15px;
  font-weight: 400;
  text-transform: uppercase;
`;

const Nav = () => {
  return (
    <Container>
      <Logo>
        <h1>
          Nisha Holdings <br /> Limited
        </h1>
      </Logo>
      <Products>
        <Links to="/">Home</Links>
        <Links to="/products?matress">Matress</Links>
        <Links to="/products?cushion">Cushion</Links>
        <Links to="/products?tanks">Tanks</Links>
        <Links to="/products?utensils">Utensils</Links>
        <Links to="/products?malimali">Mali Mali</Links>
        <Links to="/products?chairs">chairs</Links>
        <button>Login</button>
      </Products>
    </Container>
  );
};

export default Nav;
