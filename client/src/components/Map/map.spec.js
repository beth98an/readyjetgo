import { screen } from "@testing-library/react";
import Map from ".";

const props = {
    city:'Paris'
}

test("has an element with id loading", () => {
    renderWithReduxProvider(<Map {...props}/>);
    let id = screen.getByTestId("loading");
    expect(id).toBeInTheDocument();
})
