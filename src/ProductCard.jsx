import PropTypes from "prop-types";
import styled from "styled-components";

const CardContainer = styled.button`
  font-family: "Abril Fatface", display;
  background-color: white;
  border: 1.5px solid transparent;
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
  border-radius: 5px;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  &:hover {
    border-color: #98e683;
  }
`;

const Icon = styled.i`
  font-size: 7em;
  padding: 20px;
  align-self: center;
`;

const ProductName = styled.h2`
  font-size: 1.2em;
`;

function ProductCard({ testID, icon, name, price }) {
  return (
    <CardContainer data-testid={testID}>
      <Icon>{icon}</Icon>
      <ProductName>{name}</ProductName>
      <p>£{price}.00</p>
    </CardContainer>
  );
}

ProductCard.propTypes = {
  testID: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;
