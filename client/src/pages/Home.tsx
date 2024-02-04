import { styled } from "styled-components";
import Nav from "../components/Nav";
import Header from "../components/Header";
import size6 from "../assets/size6.jpg";
import size5 from "../assets/size5.jpg";
import size4 from "../assets/size4.jpg";
import size4coma6 from "../assets/size4.6.jpg";
import size3 from "../assets/size3.jpg";
import size2 from "../assets/size2.jpg";
import { Link } from "react-router-dom";
import Product from "../components/Product";

const MainContainer = styled.main``;
const NavCotainer = styled.nav`
  width: 100%;
`;
const Container = styled.div`
  width: 100%;
`;
const BySize = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow-x: scroll;
    gap: 10px;
  }
`;
const Size = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    color: slategray;
    font-size: 12px;
  }
  p {
    text-transform: capitalize;
    font-weight: bold;
    &:hover {
      color: #fd0000;
    }
  }
`;
const Links = styled(Link)`
  text-decoration: none;
  color: initial;
`;

const OurPorducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: space-around;
  }
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 100px;

  p {
    font-size: 13px;
    color: slategrey;
  }
`;
const Home = () => {
  const matresSize = [
    { pic: size6, name: "6'0 Super King", mes: "W 180cm X L 200cm" },
    { pic: size5, name: "5'0  King", mes: "W 150cm X L 200cm" },
    { pic: size4coma6, name: "4'6 Double", mes: "W 135cm X L 190cm" },
    { pic: size4, name: "4'0 small Double", mes: "W 120cm X L 190cm" },
    { pic: size3, name: "3'0 Single", mes: "W 90cm X L 190cm" },
    { pic: size2, name: "2'0 small Single", mes: "W 75cm X L 190cm" },
  ];
  return (
    <MainContainer>
      <NavCotainer>
        <Nav />
        <hr />
      </NavCotainer>
      <Container>
        <Header />

        <BySize>
          <h1>Shop by size</h1>
          <section>
            {matresSize.map((item, i) => {
              return (
                <Size key={i}>
                  <img src={item.pic} alt="" />
                  <Links to="/products?matress">
                    <p>{item.name}</p>
                  </Links>

                  <span>{item.mes}</span>
                </Size>
              );
            })}
          </section>
        </BySize>

        <OurPorducts>
          <h1>Our Products</h1>
          <Links to="/products?">Show More </Links>

          <section>
            <Product />
            <Product /> <Product /> <Product /> <Product /> <Product />{" "}
            <Product /> <Product /> <Product /> <Product /> <Product />{" "}
          </section>
          <Links to="/products?">Show More Products </Links>
        </OurPorducts>
      </Container>

      <Footer>
        <hr />
        <p>
          {" "}
          @ {new Date().getFullYear()} NISHA HOLDINGS LIMITED. All Rights
          Reserved.{" "}
        </p>
      </Footer>
    </MainContainer>
  );
};

export default Home;
