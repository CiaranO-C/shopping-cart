import { Link, NavLink } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

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
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const SearchContainer = styled.div`
  display: flex;
  container-type: size;
  width: 250px;
`;

const SearchInput = styled.input`
  width: 100%;
  opacity: ${(props) => (props.$expanded ? '1' : '0')};
  transform: ${(props) => (props.$expanded ? "scaleX(1)" : "scaleX(0)")};
  transform-origin: right;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;


function Navbar() {
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
      <Link to="/">
        <h1>Root</h1>
      </Link>
      <Nav>
        <div className="menuItems">
          <NavLink />
        </div>
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
        <NavLink to="/cart">
          <span className="material-symbols-outlined">potted_plant</span>
        </NavLink>
      </Nav>
    </Header>
  );
}

export default Navbar;
