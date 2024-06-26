import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import contextData from "./contextData";
import ProductPage from "../ProductPage";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Product page component", () => {
  beforeEach(() => {
    const { id } = contextData.plantsData[0];
    render(
      <MemoryRouter initialEntries={[`/shop/${id}`]}>
        <Routes>
          <Route path="/" element={<Outlet context={contextData} />}>
            <Route path="/shop/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );
  });

  it("Renders a product card with correct information", () => {
    // eslint-disable-next-line no-unused-vars
    const { id, ...rest } = contextData.plantsData[0];

    const textValues = Object.values(rest);
    const card = screen.getByRole("link");

    textValues.forEach((value) => {
      expect(card).toHaveTextContent(value);
    });
  });

  it('renders a heading "Like what you see?"', () => {
    expect(
      screen.getByRole("heading", { name: "Like what you see?" }),
    ).toBeInTheDocument();
  });

  it("renders a quantity controller component with an init value of 1", () => {
    expect(
      screen.getByRole("heading", { name: "Quantity" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "-" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { value: 1 })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();
  });

  it("renders an add to pot button", () => {
    expect(
      screen.getByRole("button", { name: "Add to pot" }),
    ).toBeInTheDocument();
  });

  it("user click on add to pot calls the setBasket state function", async () => {
    const user = userEvent.setup();

    const button = screen.getByRole("button", { name: "Add to pot" });

    await user.click(button);

    expect(contextData.setBasketData).toHaveBeenCalled();
  });
});
