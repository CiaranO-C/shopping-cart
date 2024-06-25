import { useOutletContext } from "react-router-dom";

function CartPage() {
  const { basketData } = useOutletContext();

  if (!basketData) return <div>Loading!</div>;

  const basketArray = Object.entries(basketData)

  console.log(basketArray)
  return (
    <main>
      <h1>Your Basket</h1>
      <ul>
        {basketArray.map(item => {
          const id = item[0];
          const data = item[1];
          return (
            <li key={id}>
              <div>
              <i>{data.icon}</i>
              <p>{data.name}</p>
              </div>
              <div>
                <p>{data.quantity}</p>
                <p>{data.quantity * data.price}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  );
}

export default CartPage;
