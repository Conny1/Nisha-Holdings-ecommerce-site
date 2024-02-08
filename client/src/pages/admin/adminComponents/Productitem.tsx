import React, { useState } from "react";
import styled from "styled-components";
import UpdateModal from "./Update";

// Styled Components
const ProductItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  max-width: 250px;
  height: 300px;
`;

const ProductDetails = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  section {
    width: 100%;
    height: 150px;
  }
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.span`
  font-weight: bold;
`;

const ProductCategory = styled.span`
  color: #777;
`;

const ProductSubcategory = styled.span`
  color: #777;
`;

const ProductQuantity = styled.span`
  color: #777;
`;
const Button = styled.button`
  flex: 1;
  background-color: #fd0000;
  padding: 3px;
  border: none;
  color: #fff;
`;

interface ProductItemProps {
  product: {
    name: string;
    category: string;
    subcategory: string;
    quantity: number;
    photo: string;
  };
  onUpdate: () => void;
  onDelete: () => void;
}

const Productitem: React.FC<ProductItemProps> = ({
  product,
  onUpdate,
  onDelete,
}) => {
  const { name, category, subcategory, quantity, photo } = product;
  const [update, setupdate] = useState(false);

  return (
    <ProductItemContainer>
      <ProductDetails>
        <section>
          <ProductImage src={photo} alt={name} />
        </section>
        <ProductInfo>
          <ProductName>{name}</ProductName>
          <ProductCategory>Category: {category}</ProductCategory>
          <ProductSubcategory>Subcategory: {subcategory}</ProductSubcategory>
          <ProductQuantity>Quantity: {quantity}</ProductQuantity>
        </ProductInfo>
      </ProductDetails>
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "3px",
        }}
      >
        <Button onClick={() => setupdate(true)}>Update</Button>
        {update && <UpdateModal setupdate={setupdate} {...product} />}
        <Button onClick={onDelete}>Delete</Button>
      </div>
    </ProductItemContainer>
  );
};

export default Productitem;
