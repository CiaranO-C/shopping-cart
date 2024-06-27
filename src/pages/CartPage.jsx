import { Link, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import QuantityController from "../components/QuantityController";
import ProductCard from "../components/ProductCard";

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0px 180px;
  gap: 20px;

  & li + li {
    margin-top: 15px;
  }

  & li {
    display: flex;
    gap: 25px;
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

  & li > button > p {
    display: none;
  }

  & li > div {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .total {
    min-width: 110px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    p {
      font-size: 0.8em;
    }
  }

  .remove,
  .shop,
  .checkout {
    border: none;
    padding: 10px;
    text-align: center;
    border-radius: 15px;
    box-shadow:
      rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }

  .checkout {
    background-color: #6fed91;
    align-self: center;
    padding: 20px;
    margin-top: 10px;
  }
`;

function CartPage() {
  const { basketData, setBasketData } = useOutletContext();

  const items = Object.values(basketData);

  if (!items.length) return <div>Loading!</div>;
  
  const totalPrice = items
    .map((item) => item.quantity * item.price)
    .reduce((total, item) => total + item);

  const basketArray = Object.entries(basketData);

  if (!basketArray.length)
    return (
      <Main>
        <h1>Your basket is empty!</h1>
        <Link to="/shop">
          <button className="shop">Shop now</button>
        </Link>
      </Main>
    );

  function clearBasket() {
    setBasketData({});
  }

  function removeFromBasket(id) {
    // eslint-disable-next-line no-unused-vars
    const { [id]: _, ...rest } = basketData;
    setBasketData(rest);
  }

  function setIndividualQuantity(id, quantity) {
    setBasketData({
      ...basketData,
      [id]: { ...basketData[id], quantity: quantity },
    });
  }

  return (
    <Main>
      <h1>Your Basket</h1>
      <ul>
        {basketArray.map((item) => {
          const id = item[0];
          const data = item[1];
          return (
            <li key={id}>
              <ProductCard id={id} icon={data.icon} name={data.name} />
              <div>
                <div className="total">
                  <QuantityController
                    status="checkout"
                    quantity={basketData[id].quantity}
                    setQuantity={setIndividualQuantity}
                    id={id}
                  />
                  <p>
                    <em>Item total: £{data.quantity * data.price}.00</em>
                  </p>
                </div>
                <button className="remove" onClick={() => removeFromBasket(id)}>
                  Remove from pot
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <p>Your Total: £{totalPrice}.00</p>
      <button onClick={clearBasket} className="checkout">
        Checkout
      </button>
    </Main>
  );
}

export default CartPage;
