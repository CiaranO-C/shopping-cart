import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";

function HomePage() {
  const [plantsData, setPlantsData] = useState(null);

  useEffect(() => {
    async function fetchEmojis() {
      const response = await fetch(
        "https://emoji-api.com/categories/animals-nature?access_key=30a61bdbe5ec72c2a7d775f9e094a853e6c3dedb",
      );
      const responseJSON = await response.json();
      const cleaned = responseJSON
        .slice(124)
        .filter((res) => res.codePoint != "1FABB")
        .map((res) => {
          return {
            icon: res.character,
            name: res.slug.split("-").slice(2).join(" "),
          };
        });
      setPlantsData(cleaned);
    }

    fetchEmojis();
  }, []);

  return (
    <>
      <main className={styles.homeContent}>
        <h1 className={styles.title}>Root.</h1>
      </main>
    </>
  );
}

export default HomePage;
