import styled from 'styled-components';
import PropTypes from 'prop-types';

const Controller = styled.div`
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



function QuantityController({quantity, setQuantity}) {

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
  return (
    <Controller>
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
    </Controller>
  )
}

QuantityController.propTypes = {
    quantity: PropTypes.number,
    setQuantity: PropTypes.func,
}

export default QuantityController;
