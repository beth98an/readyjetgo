import { screen } from "@testing-library/react";
import Quiz from ".";
import NavBar from '../../layout/NavBar'


test("has a role of quiz", () => {
    renderWithReduxProvider(<NavBar />);
    renderWithReduxProvider(<Quiz />);
    let quiz = screen.getByRole("quiz");
    expect(quiz).toBeInTheDocument();
})

test("has an element role of head", () => {
    renderWithReduxProvider(<NavBar />);
    renderWithReduxProvider(<Quiz />);
    let quiz = screen.getByRole("head");
    expect(quiz).toBeInTheDocument();
})

test("has an element role of ans1", () => {
    renderWithReduxProvider(<NavBar />);
    renderWithReduxProvider(<Quiz />);
    let quiz = screen.getByRole("ans1");
    expect(quiz).toBeInTheDocument();
})

test("has an element role of ans2", () => {
    renderWithReduxProvider(<NavBar />);
    renderWithReduxProvider(<Quiz />);
    let quiz = screen.getByRole("ans2");
    expect(quiz).toBeInTheDocument();
})
test("has a submit button", () => {
    renderWithReduxProvider(<NavBar />);
    renderWithReduxProvider(<Quiz />);
    let quiz = screen.getByRole("submit");
    expect(quiz).toBeInTheDocument();
})
