import { Link, NavLink } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SearchButton = styled.button`
  background-color: rgba(255, 255, 255, 0);
  border: none;
  width: 25px;
  transform: ${(props) =>
    props.$shifted ? "translateX(0cqw)" : "translateX(90cqw)"};
  transition: transform 0.6s ease-out;

  &:focus {
    outline: none;
  }
`;

const Header = styled.header`
  display: flex;
  background-color: rgb(224, 224, 224);
  padding: 10px 25px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100vw;
  top: 0;

  h1 {
    font-size: 3em;
    position: relative;
    top: -7px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
  width: 100%;
`;

const SearchContainer = styled.div`
  display: flex;
  container-type: size;
  width: 250px;
`;

const SearchInput = styled.input`
  width: 100%;
  opacity: ${(props) => (props.$expanded ? "1" : "0")};
  transform: ${(props) => (props.$expanded ? "scaleX(1)" : "scaleX(0)")};
  transform-origin: right;
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
`;

const BasketContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
`;

const BasketCounter = styled.div`
  font-family: 'Autour One', display;
  text-align: center;
  position: absolute;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  top: 19px;
  left: 17px;
  background-color: red;
  font-size: 0.7em;
  color: white;
`;

const MenuItems = styled.div`
  margin-right: auto;
  margin-left: 80px;
`;

function Navbar({ basketCount }) {
  const [searchActive, setSearchActive] = useState(false);

  let inputRef = useRef(null);

  function toggleActive() {
    setSearchActive(!searchActive);
  }

  useEffect(() => {
    if (searchActive) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 600);
    }
  }, [searchActive]);

  return (
    <Header>
      <Link to="/home">
        <h1>root</h1>
      </Link>
      <Nav>
        <MenuItems>
          <NavLink to="/shop">Shop</NavLink>
        </MenuItems>
        <SearchContainer>
          <SearchButton
            $shifted={searchActive}
            onClick={toggleActive}
            aria-label="open-search-bar"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
          </SearchButton>
          <SearchInput
            ref={inputRef}
            $expanded={searchActive}
            type="search"
            role="searchbox"
          />
        </SearchContainer>
        <NavLink to="cart">
          <BasketContainer>
            <span className="material-symbols-outlined">potted_plant</span>
            {basketCount !== 0 && <BasketCounter>{basketCount}</BasketCounter>}
          </BasketContainer>
        </NavLink>
      </Nav>
    </Header>
  );
}

Navbar.propTypes = {
  basketCount: PropTypes.number,
};

export default Navbar;
