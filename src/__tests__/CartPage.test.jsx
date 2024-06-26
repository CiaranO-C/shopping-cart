import { describe, expect, it } from "vitest";
import CartPage from "../CartPage";
import contextData from "./contextData";
import {
  getAllByRole,
  getAllByTestId,
  getByRole,
  render,
  screen,
} from "@testing-library/react";
import RenderRouteWithOutletContext from "./RenderWithOutletContext";
import userEvent from "@testing-library/user-event";

describe("Cart page component", () => {
  it('renders heading "Your basket"', () => {
    render(
      <RenderRouteWithOutletContext context={contextData}>
        <CartPage />
      </RenderRouteWithOutletContext>,
    );
    expect(
      screen.getByRole("heading", { name: "Your Basket" }),
    ).toBeInTheDocument();
  });

  it("renders all items in basket as individual product cards with icon and name", () => {
    render(
      <RenderRouteWithOutletContext context={contextData}>
        <CartPage />
      </RenderRouteWithOutletContext>,
    );
    const productIDs = Object.keys(contextData.basketData);

    productIDs.forEach((id) => {
      const product = contextData.basketData[id];
      const card = screen.getByTestId(id);
      expect(card).toHaveTextContent(product.icon);
      expect(card).toHaveTextContent(product.name);
    });
  });

  it("renders a quantity controller per card", () => {
    render(
      <RenderRouteWithOutletContext context={contextData}>
        <CartPage />
      </RenderRouteWithOutletContext>,
    );

    const numOfItemsInBasket = Object.keys(contextData.basketData).length;

    const headings = screen.getAllByRole("heading", { name: "Quantity" });
    const addBtns = screen.getAllByRole("button", { name: "+" });
    const minusBtns = screen.getAllByRole("button", { name: "-" });
    const inputs = screen.getAllByRole("textbox");

    const quantityComponents = [headings, addBtns, minusBtns, inputs];
    quantityComponents.forEach((component) => {
      expect(component.length).toEqual(numOfItemsInBasket);
    });
  });

  it("renders each item quantity correctly", () => {
    render(
      <RenderRouteWithOutletContext context={contextData}>
        <CartPage />
      </RenderRouteWithOutletContext>,
    );
    const productQuantities = Object.entries(contextData.basketData);

    productQuantities.forEach((product) => {
      const id = product[0];
      const quantity = `${product[1].quantity}`;
      const quantityInput = screen.getByTestId(`quantity-${id}`);
      expect(quantityInput).toHaveValue(quantity);
    });
  });

  it('renders a "Remove from pot" button for each card', () => {
    render(
      <RenderRouteWithOutletContext context={contextData}>
        <CartPage />
      </RenderRouteWithOutletContext>,
    );
    const numOfDiffItems = Object.keys(contextData.basketData).length;
    expect(
      screen.getAllByRole("button", { name: "Remove from pot" }).length,
    ).toEqual(numOfDiffItems);
  });

  it("removes product card on click of remove button", async () => {
    const user = userEvent.setup();
    render(
      <RenderRouteWithOutletContext context={contextData}>
        <CartPage />
      </RenderRouteWithOutletContext>,
    );

    const firstButton = screen.queryAllByRole("button", {
      name: "Remove from pot",
    })[0];

    expect(contextData.setBasketData).not.toHaveBeenCalled();

    await user.click(firstButton);

    expect(contextData.setBasketData).toHaveBeenCalled();
  });
});
