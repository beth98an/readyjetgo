import { screen } from "@testing-library/react";
import Lobby from ".";

// test("it renders the Lobby component", () => {
//     renderWithReduxProvider(<Lobby />);
//     let  = screen.getByRole("main");
//     expect().toBeInTheDocument();
//   });

test("has an id of lobbybtn", () => {
    renderWithReduxProvider(<Lobby/>);
    let button = screen.getByTestId("lobbybtn");
    expect(button).toBeInTheDocument();
})