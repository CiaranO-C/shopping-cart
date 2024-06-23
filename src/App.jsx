import React from "react";
import { Outlet } from "react-router-dom";
import "./App.module.css";
import Navbar from "./navbar/Navbar";
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [plantsData, setPlantsData] = useState(null);

  useEffect(() => {
    let data;
    async function fetchEmojis() {
      if (!localStorage.getItem("emojisData")) {
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
            };
          });
        localStorage.setItem("emojisData", JSON.stringify(data));
      } else {
        console.log("retrieving");
        const stringData = localStorage.getItem("emojisData");
        data = await JSON.parse(stringData);
      }
      setPlantsData(data);
    }

    fetchEmojis();
  }, []);

  return (
    <>
      <Navbar />
      <Outlet context={[plantsData]} />
    </>
  );
}

export default App;
