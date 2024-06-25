import { describe, expect, it, vi } from "vitest";
import HomePage from "../home/HomePage.jsx";
import { render, screen } from "@testing-library/react";
import RenderRouteWithOutletContext from "./RenderWithOutletContext.jsx";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";
import ShopPage from "../ShopPage.jsx";

const contextData = {
  plantsData: [
    {
      icon: "🏵️",
      name: "one",
      id: "1",
      price: 10,
    },
    {
      icon: "🏵️",
      name: "two",
      id: "2",
      price: 10,
    },
    {
      icon: "🏵️",
      name: "three",
      id: "3",
      price: 10,
    },
    {
      icon: "🏵️",
      name: "four",
      id: "4",
      price: 10,
    },
  ],
  basketData: {
    1: {
      icon: "🏵️",
      name: "one",
      price: 10,
      quantity: 1,
    },
    2: {
      icon: "🏵️",
      name: "two",
      price: 10,
      quantity: 2,
    },
    3: {
      icon: "🏵️",
      name: "three",
      price: 12,
      quantity: 3,
    },
    4: {
      icon: "🏵️",
      name: "four",
      price: 14,
    },
  },
  setBasketData: vi.fn(),
};

describe("HomePage component", () => {
  it('Renders with the title "Root" visible on the page', () => {
    render(
      <RenderRouteWithOutletContext context={contextData}>
        <HomePage />
      </RenderRouteWithOutletContext>,
    );

    expect(screen.getByRole("heading", { name: "root" })).toBeInTheDocument();
  });

  it("Renders total number of icons once per carousel", () => {
    render(
      <RenderRouteWithOutletContext context={contextData}>
        <HomePage />
      </RenderRouteWithOutletContext>,
    );
    const numOfCarousels = 2;
    const numOfPlants = contextData.plantsData.length; //test has 4 plants
    const totalExpectedIcons = numOfCarousels * numOfPlants; //total 8
    const testIcon = contextData.plantsData[0].icon;
    const icons = screen.getAllByText(`${testIcon}`);

    expect(totalExpectedIcons).toEqual(icons.length);
    icons.forEach((icon) => {
      expect(icon).toBeVisible();
    });
  });

  it("Renders a Link component with a button with the text 'shop now'", () => {
    render(
      <RenderRouteWithOutletContext context={contextData}>
        <HomePage />
      </RenderRouteWithOutletContext>,
    );

    expect(
      screen.getByRole("button", { name: "shop now" }),
    ).toBeInTheDocument();
  });

  it("click of shop now button takes user to shop page", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Outlet context={contextData} />}>
            <Route index element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    const link = screen.getByRole("link", { name: "shop now" });

    await user.click(link);

    const heading = screen.getByText(/All Items/i);

    expect(heading).toBeInTheDocument();
  });
});
