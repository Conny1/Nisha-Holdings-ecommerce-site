import { styled } from "styled-components";
import Product from "../components/Product";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  outline: 1px solid black;
`;
const Filters = styled.div`
  height: 100px;
  outline: 1px solid red;

  background-color: #fd0000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    text-transform: capitalize;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }

  form {
    width: 40%;
  }
  input {
    padding: 10px;
    border: none;
    outline: none;
    width: 95%;
    max-width: 500px;
    border-radius: 5px;
    font-size: 15px;
  }
`;
const Products = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: space-around;
`;

const Allproducts = () => {
  const location = useLocation().search.split("?");
  // console.log(location);
  return (
    <Container>
      <Filters>
        <p> {location.length > 1 ? location[1] : "All products"}</p>
        <form>
          <input type="search " placeholder="Search" />
        </form>
      </Filters>
      <Products>
        <Product />
        <Product /> <Product /> <Product /> <Product /> <Product /> <Product />{" "}
        <Product /> <Product /> <Product /> <Product /> <Product /> <Product />{" "}
        <Product /> <Product /> <Product /> <Product /> <Product /> <Product />{" "}
        <Product /> <Product /> <Product /> <Product /> <Product /> <Product />{" "}
        <Product /> <Product />
      </Products>
    </Container>
  );
};

export default Allproducts;
