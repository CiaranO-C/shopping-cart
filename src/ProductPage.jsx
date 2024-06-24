import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
`;

const ProductControls = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;

  & > button {
    height: 25px;
    border-radius: 15px;
    border: none;
    box-shadow:
      rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }
`;

const QuantityController = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  & > div {
    display: flex;
    gap: 5px;

    button {
      text-align: center;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: none;
      box-shadow:
        rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }
  }

  input {
    width: 25px;
    height: 25px;
    text-align: center;
  }
`;

function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const { plantsData, basketData, setBasketData } = useOutletContext();
  const page = useParams();

  if (!plantsData) return <div>Loading!</div>;

  const productData = plantsData.find((item) => item.id === page.id);

  function handleAdd() {
    setQuantity(quantity + 1);
  }

  function handleRemove() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handleBlur(e) {
    const value = e.target.value;
    if (value < 1 || value[0] === "0") {
      setQuantity(1);
    }
  }

  function handleInput(e) {
    const value = e.target.value;
    if (value >= 0) {
      setQuantity(value);
    }
  }

  function addToBasket() {
    const { id, ...rest } = productData;

    if (Object.hasOwn(basketData, [id])) {
      setBasketData({
        ...basketData,
        [id]: { ...rest, quantity: basketData[id].quantity + quantity },
      });
    } else {
      setBasketData({
        ...basketData,
        [id]: { ...rest, quantity: quantity },
      });
    }
  }

  return (
    <Main>
      <ContentContainer>
        <ProductCard
          icon={productData.icon}
          name={productData.name}
          price={productData.price}
        />
        <ProductControls>
          <h3>Like what you see?</h3>
          <QuantityController>
            <h4>Quantity</h4>
            <div>
              <button onClick={handleRemove}>-</button>
              <input
                onBlur={handleBlur}
                onChange={handleInput}
                value={quantity}
                type="text"
                inputMode="numeric"
              />
              <button onClick={handleAdd}>+</button>
            </div>
            <p>£{productData.price * quantity}.00</p>
          </QuantityController>

          <button onClick={addToBasket}>Add to pot</button>
        </ProductControls>
      </ContentContainer>
    </Main>
  );
}

export default ProductPage;
