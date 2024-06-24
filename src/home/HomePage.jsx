import Carousel from "../components/Carousel";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Home = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  button {
    border: none;
    box-shadow:
      rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    padding: 25px;
    border-radius: 15px;
    font-family: "Abril Fatface", display;
  }
`;

const Title = styled.h1`
  font-size: 3.5em;
  margin: 45px 0px;
`;

function HomePage() {
  return (
    <>
      <Home>
        <Carousel direction="right" />
        <Title>root</Title>
        <Link to='/shop'>
          <button>shop now</button>
        </Link>
        <Carousel direction="left" />
      </Home>
    </>
  );
}

export default HomePage;
