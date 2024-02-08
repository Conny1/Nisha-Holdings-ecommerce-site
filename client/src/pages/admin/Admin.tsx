import React, { useState } from "react";
import styled from "styled-components";
import Productitem from "./adminComponents/Productitem";
import AddProductModal from "./adminComponents/AddProduct";
import { Link } from "react-router-dom";

// Styled Components
const Header = styled.header`
  background-color: #fd0000;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  section {
    display: flex;
    gap: 5px;
  }
`;

const Title = styled.h1`
  margin: 0;
`;

const Button = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const ProductList = styled.ul`
  list-style: none;
  /* padding: 0; */
  display: flex;
  flex-wrap: wrap;

  /* justify-content: space-between; */
  gap: 10px;
`;

const products = [
  {
    name: "Smartphone",
    category: "Electronics",
    subcategory: "Mobile Phones",
    quantity: 50,
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "Laptop",
    category: "Electronics",
    subcategory: "Computers",
    quantity: 30,
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "T-shirt",
    category: "Clothing",
    subcategory: "Men's Clothing",
    quantity: 100,
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "Sneakers",
    category: "Footwear",
    subcategory: "Men's Shoes",
    quantity: 20,
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "Watch",
    category: "Accessories",
    subcategory: "Watches",
    quantity: 80,
    photo: "https://via.placeholder.com/150",
  },
];

const AdminPanel: React.FC = () => {
  //   const [products, setProducts] = useState<any[]>([]);
  const [addproduct, setaddproduct] = useState(false);

  const handleAddProduct = () => {
    // Implement your logic to add a new product
  };

  const handleDeleteProduct = (index: number) => {
    // Implement your logic to delete a product
  };

  return (
    <div>
      <Header>
        <Link
          style={{
            textDecoration: "none",
            color: "initial",
          }}
          to="/"
        >
          <Title>Nisha Holdings</Title>
        </Link>

        <section>
          {addproduct && <AddProductModal setaddproduct={setaddproduct} />}
          <Button onClick={() => setaddproduct(true)}>Add Product</Button>
          <Button onClick={handleAddProduct}>Log out</Button>
        </section>
      </Header>
      <ProductList>
        {products.map((product, index) => (
          <Productitem
            key={index}
            product={product}
            onUpdate={() => {
              // Handle update logic
              console.log("Updating product:", product);
            }}
            onDelete={() => handleDeleteProduct(index)}
          />
        ))}
      </ProductList>
    </div>
  );
};

export default AdminPanel;
