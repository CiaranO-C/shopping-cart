import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";

function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const { plantsData, basketData, setBasketData } = useOutletContext();
  const page = useParams();
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
    const input = e.target;
    if (input.value < 1) {
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
    <main>
      <div>
        <ProductCard
          icon={productData.icon}
          name={productData.name}
          price={productData.price}
        />
        <div>
          <h3>Like what you see?</h3>
          <div>
            <h4>Quantity</h4>
            <button onClick={handleRemove}>-</button>
            <input
              onBlur={handleBlur}
              onChange={handleInput}
              value={quantity}
              type="number"
            />
            <button onClick={handleAdd}>+</button>
          </div>
          <p>£{productData.price * quantity}.00</p>
          <button onClick={addToBasket}>Add to pot</button>
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
