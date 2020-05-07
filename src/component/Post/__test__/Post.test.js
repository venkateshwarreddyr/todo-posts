import React from "react";
import ReactDOM from "react-dom";
import Post from "../Post";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

it("Render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Post userId={1} userName={"Venkatesh"} id={1} title={"React coding"} />
    </MemoryRouter>,
    div
  );
});
it("Render Post correctly", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Post userId={1} userName={"Venkatesh"} id={1} title={"React coding"} />
    </MemoryRouter>
  );
  expect(getByTestId('post')).toMatchSnapshot()
});
