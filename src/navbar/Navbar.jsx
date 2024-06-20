import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

function Navbar() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>Root.</h1>
      </Link>
      <nav className={styles.nav}>
        <div className="search">
          <button>
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        <NavLink>
          <span className="material-symbols-outlined">potted_plant</span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
