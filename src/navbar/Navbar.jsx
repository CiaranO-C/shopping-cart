import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [searchActive, setSearchActive] = useState(false);

  let inputRef = useRef(null);

  function toggleActive() {
    setSearchActive(!searchActive);
  }

  useEffect(() => {
    if (searchActive) {
      inputRef.current.style.visibility = 'visible';
      inputRef.current.focus();
    } else {
      inputRef.current.style.visibility = 'hidden';
    }
  }, [searchActive]);

  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>Root.</h1>
      </Link>
      <nav className={styles.nav}>
        <div className={styles.searchContainer}>
          <button
            onClick={toggleActive}
            className={
              searchActive
                ? `${styles.searchBtn} ${styles.shifted}`
                : styles.searchBtn
            }
            aria-label="open-search-bar"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
          </button>
          <input
            ref={inputRef}
            autoFocus={searchActive && true}
            className={
              searchActive
                ? `${styles.searchInput} ${styles.expanded}`
                : styles.searchInput
            }
            type="search"
            role="searchbox"
          />
        </div>
        <NavLink to="/cart">
          <span className="material-symbols-outlined">potted_plant</span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;