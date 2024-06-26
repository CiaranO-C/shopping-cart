import { describe, expect, it, vi } from "vitest";
import QuantityController from "../components/QuantityController";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const testQuant = {
  quantity: 1,
  setQuantity: vi.fn(),
};
//status, quantity, setQuantity, id
describe("quantity controller component with shop status", () => {
  it("renders with an inital quantity of 1", () => {
    render(
      <QuantityController
        status="shop"
        quantity={testQuant.quantity}
        setQuantity={testQuant.setQuantity}
        id={null}
      />,
    );

    expect(screen.getByRole("textbox", { value: 1 })).toBeInTheDocument();
  });

  it("calls set quantity click of the + button", async () => {
    const user = userEvent.setup();
    render(
      <QuantityController
        status="shop"
        quantity={testQuant.quantity}
        setQuantity={testQuant.setQuantity}
        id={null}
      />,
    );
    const addBtn = screen.getByRole("button", { name: "+" });
    await user.click(addBtn);
    expect(testQuant.setQuantity).toHaveBeenCalled();
  });

  it("calls set quantity click of the - button", async () => {
    const user = userEvent.setup();
    render(
      <QuantityController
        status="shop"
        quantity={testQuant.quantity}
        setQuantity={testQuant.setQuantity}
        id={null}
      />,
    );
    const addBtn = screen.getByRole("button", { name: "-" });
    await user.click(addBtn);
    expect(testQuant.setQuantity).toHaveBeenCalled();
  });

  it("calls set quantity click on input change", async () => {
    const user = userEvent.setup();
    render(
      <QuantityController
        status="shop"
        quantity={testQuant.quantity}
        setQuantity={testQuant.setQuantity}
        id={null}
      />,
    );
    const input = screen.getByRole("textbox", { value: 1 });
    await user.click(input);
    await user.keyboard('2');
    expect(testQuant.setQuantity).toHaveBeenCalled();
  });
});
