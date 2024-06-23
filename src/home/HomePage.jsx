import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import styled from "styled-components";

const Home = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
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
        <Title>Root</Title>
        <Carousel direction="left" />
      </Home>
    </>
  );
}

export default HomePage;
