import { screen } from "@testing-library/react";
import { render } from "express/lib/response";
import Chat from "./index";
import { sendMessage } from './index'

    test('should render a message button', () => {
        renderWithReduxProvider(<sendMessage />)
        const sendMessage = screen.getByTestId('sendMessage')
        expect(sendMessage.textContent).toContain('Send Message!')
    })

    test('has an id of heading"', () => {
        renderWithReduxProvider(<Chat />);
        const heading = screen.getByRole('head')
        expect(heading.textContent).toContain("Ready Jet Go, Chat!");
    });

    test("it renders the Chat component", () => {
        renderWithReduxProvider(<Chat />);
        let chat = screen.getByRole("chat");
        expect(chat).toBeInTheDocument();
    });

    test("it renders the Chatroom component", () => {
        renderWithReduxProvider(<Chat />);
        let chat = screen.getByRole("chatroom");
        expect(chat).toBeInTheDocument();
    });

    test("it renders the startroom component", () => {
        renderWithReduxProvider(<Chat />);
        let chat = screen.getByRole("startRoom");
        expect(chat).toBeInTheDocument();
    });

})
