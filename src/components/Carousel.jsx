import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Track = styled.div`
  display: flex;
  gap: 50px;
`;

const CarouselIcon = styled.div`
  background-color: transparent;
  width: 120px;
  height: 120px;
  font-size: 3.8em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingUI = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 3.8em;
  width: 100vw;
`;

const SlideContainer = styled.div`
  animation: ${(props) => (props.$left ? "slideLeft" : "slideRight")} 65s linear
    infinite alternate;
  ${(props) => (!props.$left ? "justify-content: flex-end;" : "")};

  @keyframes slideRight {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100vw);
    }
  }

  @keyframes slideLeft {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100vw);
    }
  }
`;

function Carousel({ direction }) {
  const {plantsData} = useOutletContext();
  const left = direction === "left";
  if (!plantsData) return <LoadingUI>Loading...</LoadingUI>;

  const plantsArray = plantsData.sort(() => Math.random() - 0.5);

  return (
    <SlideContainer $left={left}>
      <Track>
        {plantsArray.map((item) => {
          return <CarouselIcon key={item.id}>{item.icon}</CarouselIcon>;
        })}
      </Track>
    </SlideContainer>
  );
}

Carousel.propTypes = {
  direction: PropTypes.string,
};

export default Carousel;
