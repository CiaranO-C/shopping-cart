import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import Carousel from "../components/Carousel";

function HomePage() {
  return (
    <>
      <main className={styles.homeContent}>
        <Carousel direction="right" />
        <h1 className={styles.title}>Root</h1>
        <Carousel direction="left" />
      </main>
    </>
  );
}

export default HomePage;
