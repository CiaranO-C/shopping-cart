import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ShopPage from "../ShopPage.jsx";
import contextData from "./contextData.js";
import RenderRouteWithOutletContext from "./RenderWithOutletContext.jsx";


describe("Shop page main content", () => {
  it('renders heading "All Items"', () => {
    render(
      <RenderRouteWithOutletContext context={contextData}>
        <ShopPage />
      </RenderRouteWithOutletContext>,
    );
    const contentHeader = screen.getByRole("heading", { name: "All Items" });
    expect(contentHeader).toBeInTheDocument();
  });

  it("renders individual product cards for each plant", () => {
    render(
      <RenderRouteWithOutletContext context={contextData}>
        <ShopPage />
      </RenderRouteWithOutletContext>,
    );
    const plants = contextData.plantsData;
    const numOfPlants = plants.length; // 4
    const productCards = screen.getAllByRole("link");

    //matches hrefs to product ids
    for (let i = 0; i < numOfPlants; i++) {
      const plant = plants[i];
      const href = `/${plant.id}`;
      const itemLink = screen
        .getAllByRole("link")
        .find((item) => item.getAttribute("href") === href);
      expect(itemLink).toBeInTheDocument();
    }
    expect(productCards.length).toEqual(numOfPlants);
  });
});
