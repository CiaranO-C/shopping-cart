import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*,
*::after,
*::before {
margin: 0;
padding: 0;
box-sizing: border-box;
}

a {
  font-weight: 500;
  color: #000000;
  text-decoration: inherit;
}
a:hover {
  color: #292929;
}

#root {
  height: 100%;
}

html, body {
  height: 100%;
}

body {
  min-width: 100vw;
  min-height: 100vh;
}

h1 {
  font-family: "Autour One", "Albert Sans", sans-serif;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

`;

export default GlobalStyles;