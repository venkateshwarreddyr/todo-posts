import React from "react";
import ReactDOM from "react-dom";
import PostDetails from "../PostDetails";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

const comments = [
  {
    name: "Venkatesh",
    email: "venkateshwar1996@gmail.com",
    body: "good content",
  },
];

it("Render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <PostDetails
        comments={comments}
        userName={"Venkatesh"}
        body={"content body"}
        id={1}
        title={"React coding"}
      />
    </MemoryRouter>,
    div
  );
});
it("Render PostDetails correctly", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <PostDetails
        comments={comments}
        userName={"Venkatesh"}
        body={"content body"}
        id={1}
        title={"React coding"}
      />
    </MemoryRouter>
  );
  expect(getByTestId("postdetails")).toMatchSnapshot();
});
it("Render PostDetails correctly", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <PostDetails
        comments={[]}
        userName={"Venkatesh"}
        body={"content body"}
        id={1}
        title={"React coding"}
      />
    </MemoryRouter>
  );
  expect(getByTestId("postdetails")).toMatchSnapshot();
});
