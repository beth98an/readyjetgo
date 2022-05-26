import { screen } from "@testing-library/react";
import Register from ".";

test("it renders the Login component", () => {
    renderWithReduxProvider(<Register />);
    let login = screen.getByRole("register");
    expect(login).toBeInTheDocument();
  });

test("has a title id of Register", () => {
    renderWithReduxProvider(<Register />);
    let id = screen.getByTestId("h1");
    expect(id).toBeInTheDocument();
})
test("has a element for username input", () => {
  renderWithReduxProvider(<Register />);
  let id = screen.getByTestId("username");
  expect(id).toBeInTheDocument();
})
test("has a element for password input", () => {
  renderWithReduxProvider(<Register />);
  let id = screen.getByTestId("password");
  expect(id).toBeInTheDocument();
})
