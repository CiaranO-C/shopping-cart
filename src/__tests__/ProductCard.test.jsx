import { describe, expect, it } from "vitest";
import ProductCard from "../ProductCard";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";
import contextData from "./contextData";
import ProductPage from "../ProductPage";

describe("Product Card Component", () => {
  it("Renders Card with correct information via props", () => {
    const testProducts = [
      {
        icon: "🌿",
        name: "branch",
        id: "1",
        price: 10,
      },
      {
        icon: "🏵️",
        name: "flower",
        id: "2",
        price: 20,
      },
    ];

    render(
      <MemoryRouter>
        <ProductCard
          id={testProducts[0].id}
          name={testProducts[0].name}
          icon={testProducts[0].icon}
          price={testProducts[0].price}
        />
        <ProductCard
          id={testProducts[1].id}
          name={testProducts[1].name}
          icon={testProducts[1].icon}
          price={testProducts[1].price}
        />
      </MemoryRouter>,
    );

    testProducts.forEach((product) => {
      const { id, ...rest } = product;
      const card = screen.getByTestId(id);
      const values = Object.values(rest);
      expect(card).toBeInTheDocument();
      values.forEach((value) => {
        expect(card).toHaveTextContent(value);
      });
    });
  });

  it("correct product page loaded with dynamic url", () => {
    render(
      <MemoryRouter initialEntries={["/shop/1"]}>
        <Routes>
          <Route path="/shop" element={<Outlet context={contextData} />}>
            <Route path="/shop/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );
    //mock product id's range from 1-4
    const firstProduct = contextData.plantsData[0];
    const productCard = screen.getByTestId("1");

    //confirm first card matches first product
    expect(productCard).toHaveTextContent(firstProduct.name);
    expect(screen.getAllByRole("link").length).toEqual(1);
  });
});
