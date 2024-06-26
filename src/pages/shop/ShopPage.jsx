import { useOutletContext } from "react-router-dom";
import ShopSkeleton from "./ShopSkeleton.jsx";
import ProductCard from "../../components/ProductCard";
import styled from "styled-components";

const ShopContent = styled.main`
  padding: 0px 100px;
  padding-top: 20px;
  margin-top: 85px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
  margin-top: 15px;
`;

function ShopPage() {
  const { plantsData } = useOutletContext();

  if (!plantsData) return <ShopSkeleton />;

  return (
    <ShopContent>
      <h1>All Items</h1>
      <ProductGrid>
        {plantsData.map((item) => {
          return (
            <ProductCard
              key={item.id}
              id={item.id}
              icon={item.icon}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </ProductGrid>
    </ShopContent>
  );
}

export default ShopPage;
