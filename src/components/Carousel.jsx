import { useOutletContext } from "react-router-dom";
import styles from "./Carousel.module.css";
import PropTypes from 'prop-types';

function Carousel({ direction }) {
  const [plantsData] = useOutletContext();
  const left = direction === "left";
  if (!plantsData)
    return <div className={styles.carouselContainer}>Loading...</div>;

  const plantsArray = plantsData.sort(() => Math.random() - 0.5);

  return (
    <div className={`${styles.carouselContainer} ${left ? styles.left : styles.right} `}>
      <div className={styles.track}>
        {plantsArray.map((item) => {
          return (
            <button className={styles.carouselIcon} key={item.id}>
              {item.icon}
            </button>
          );
        })}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  direction: PropTypes.string,
};

export default Carousel;
