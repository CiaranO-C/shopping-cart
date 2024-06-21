import { render, screen } from "@testing-library/react";
import Navbar from "../navbar/Navbar.jsx";
import userEvent from "@testing-library/user-event";
import { expect, describe, it } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("NavBar Component", () => {
  it("renders the search icon", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const searchIcon = screen.getByLabelText("open-search-bar");
    expect(searchIcon).toBeInTheDocument();
  });

  it("searchbar hidden on initial render", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const searchbar = screen.queryByRole("searchbox");
    expect(searchbar).not.toBeInTheDocument();
  });

  it('searchbar visibile upon click of search icon', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const searchIcon = screen.getByLabelText("open-search-bar");
    await user.click(searchIcon);
    const searchbar = screen.getByRole("searchbox");
    expect(searchbar).toBeVisible();
  })
});
