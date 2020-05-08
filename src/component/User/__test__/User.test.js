import React from "react";
import ReactDOM from "react-dom";
import User from "../User";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";


it("Render without crashing", () => {
  const div = document.createElement("div");
  const company = {
    name: "jmr",
    catchPhrase: "nostalgia",
    bs: "Food"
  };

  ReactDOM.render(
    <MemoryRouter>
      <User
        username={"v@fegsbdf"}
        name={"Venkatesh"}
        email={"venkateshwar1996@gmail.com"}
        website={"google.com"}
        company={company}
      />
    </MemoryRouter>,
    div
  );
});

it("Render User correctly", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <User
        username={"v@fegsbdf"}
        name={"Venkatesh"}
        email={"venkateshwar1996@gmail.com"}
        website={"google.com"}
        company={{}}
      />
    </MemoryRouter>
  );
  expect(getByTestId("user")).toMatchSnapshot();
});
