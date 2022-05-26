import { screen } from "@testing-library/react";
import Map from '../../components/Map'
import Results from ".";

const props = {
  city:'Paris'
}

test("it renders the Results component", () => {
    renderWithReduxProvider(<Map {...props}/>)
    renderWithReduxProvider(<Results />);
    let results = screen.getByRole("map");
    expect(results).toBeInTheDocument();
  });
