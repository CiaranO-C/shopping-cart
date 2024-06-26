import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";
import styled from "styled-components";
import QuantityController from "./components/QuantityController.jsx";

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

function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const { plantsData, basketData, setBasketData } = useOutletContext();
  const page = useParams();

  if (!plantsData) return <div>Loading!</div>;

  const productData = plantsData.find((item) => item.id === page.id);

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
          id={productData.id}
          icon={productData.icon}
          name={productData.name}
          price={productData.price}
        />
        <ProductControls>
          <h3>Like what you see?</h3>
          <QuantityController status='shop'id={productData.id} quantity={quantity} setQuantity={setQuantity} />
          <p>£{productData.price * quantity}.00</p>
          <button onClick={addToBasket}>Add to pot</button>
        </ProductControls>
      </ContentContainer>
    </Main>
  );
}

export default ProductPage;
