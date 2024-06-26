import { describe, expect, it } from "vitest";
import ProductCard from "../ProductCard";
import {
  render,
  screen,
} from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';

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
});
