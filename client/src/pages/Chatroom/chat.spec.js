import { screen } from "@testing-library/react";
import Chat from "./index";

describe('Chatroom', () => {
    
    test('has an id of heading"', () => {
        renderWithReduxProvider(<Chat />);
        const heading = screen.getByRole('heading')
        expect(heading.textContent).toContain("Ready Jet Go, Chat!");
    });

test("it renders the Chatroom component", () => {
    renderWithReduxProvider(<Chat />);
    let chat = screen.getByRole("chat");
    expect(chat).toBeInTheDocument();
  });

})