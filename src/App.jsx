import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [plantsData, setPlantsData] = useState(null);
  const [basketData, setBasketData] = useState({});

  const basketCount = Object.values(basketData)
    .map((item) => item.quantity)
    .reduce((acc, current) => acc + current, 0);

  useEffect(() => {
    if (basketCount !== 0) {
      console.log("setting basket");
      sessionStorage.setItem("basketData", JSON.stringify(basketData));
    }
  }, [basketData]);

  useEffect(() => {
    async function getBasket() {
      if (sessionStorage.getItem("basketData")) {
        const basketString = sessionStorage.getItem("basketData");
        console.log(basketString);
        const basketJSON = await JSON.parse(basketString);
        console.log(basketJSON);
        setBasketData(basketJSON);
      }
    }
    getBasket();
  }, []);

  useEffect(() => {
    let data;

    function generateRandomPrice(min, max) {
      return Math.floor(min + Math.random() * (max - min + 1));
    }

    async function fetchEmojis() {
      if (!sessionStorage.getItem("emojisData")) {
        console.log("fetching");
        const response = await fetch(
          "https://emoji-api.com/categories/animals-nature?access_key=30a61bdbe5ec72c2a7d775f9e094a853e6c3dedb",
        );
        const responseJSON = await response.json();
        data = responseJSON
          .slice(124)
          .filter((res) => res.codePoint != "1FABB")
          .map((res) => {
            return {
              icon: res.character,
              name: res.slug.split("-").slice(2).join(" "),
              id: res.codePoint,
              price: generateRandomPrice(15, 60),
            };
          });
        sessionStorage.setItem("emojisData", JSON.stringify(data));
      } else {
        console.log("retrieving");
        const stringData = sessionStorage.getItem("emojisData");
        data = await JSON.parse(stringData);
      }
      setPlantsData(data);
    }

    fetchEmojis();
  }, []);

  return (
    <>
      <Navbar basketCount={basketCount} />
      <Outlet context={{ plantsData, basketData, setBasketData }} />
    </>
  );
}

export default App;
