import { screen } from "@testing-library/react";
import RandomLocation from "./RandomLocation";

test("it renders the RandomLocation component", () => {
    renderWithReduxProvider(<RandomLocation />);
    let btn = screen.getByRole("hiddenbtn");
    expect(btn).toBeInTheDocument();
  });