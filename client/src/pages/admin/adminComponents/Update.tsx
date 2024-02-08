import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  flex: 1;
  max-width: 500px;
  background-color: #fd0000;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
`;

const Button = styled.button`
  background-color: #fff;
  color: #fd0000;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

type Props = {
  setupdate: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  category: string;
  subcategory: string;
  quantity: number;
};

const UpdateModal = ({
  setupdate,
  name,
  category,
  subcategory,
  quantity,
}: Props) => {
  const [product, setProduct] = useState({
    name: name,
    category: category,
    subcategory: subcategory,
    quantity: quantity,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <ModalContainer>
      <ModalContent>
        <h2>Update Product</h2>
        <Form onSubmit={handleSubmit}>
          <Label>Name:</Label>
          <Input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />
          <Label>Category:</Label>
          <Input
            type="text"
            name="category"
            value={product.category}
            onChange={handleInputChange}
          />
          <Label>Subcategory:</Label>
          <Input
            type="text"
            name="subcategory"
            value={product.subcategory}
            onChange={handleInputChange}
          />
          <Label>Quantity:</Label>
          <Input
            type="number"
            name="quantity"
            value={product.quantity.toString()}
            onChange={handleInputChange}
          />

          <Button type="submit">Update Product</Button>
          <Button type="button" onClick={() => setupdate(false)}>
            Cancel
          </Button>
        </Form>
      </ModalContent>
    </ModalContainer>
  );
};

export default UpdateModal;
