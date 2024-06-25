import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import QuantityController from "./QuantityController";
import ProductCard from "./ProductCard";

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  & li {
    display: flex;
  }

  & li > button {
    font-size: 1em;
    width: 200px;
    align-items: center;
  }

  & li > button > i {
    font-size: 5em;
    padding: 5px;
  }

  & p {
    display: none;
  }
`;

function CartPage() {
  const { basketData, setBasketData } = useOutletContext();

  if (!basketData) return <div>Loading!</div>;

  function removeFromBasket(id) {
    const { [id]: _, ...rest } = basketData;
    setBasketData(rest);
  }

  function setIndividualQuantity(id, quantity) {
    setBasketData({
      ...basketData,
      [id]: { ...basketData[id], quantity: quantity },
    });
  }

  const basketArray = Object.entries(basketData);

  return (
    <Main>
      <h1>Your Basket</h1>
      <ul>
        {basketArray.map((item) => {
          const id = item[0];
          const data = item[1];
          return (
            <>
            <li key={id}>
              <ProductCard icon={data.icon} name={data.name} />
              <div>
                <QuantityController
                  status="checkout"
                  quantity={basketData[id].quantity}
                  setQuantity={setIndividualQuantity}
                  id={id}
                />
                <span>Item total: £{data.quantity * data.price}.00</span>
                <button onClick={() => removeFromBasket(id)}>
                  Remove from pot
                </button>
              </div>
            </li>
            <button>Checkout</button>
            </>
          );
        })}
      </ul>
    </Main>
  );
}

export default CartPage;
