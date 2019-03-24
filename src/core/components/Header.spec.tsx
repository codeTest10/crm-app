import * as React from "react";
import { shallow } from "enzyme";
import { Header } from "./Header";

describe("Header", () => {
  it("renders with title", () => {
    var header = shallow(<Header>Manage Customers</Header>);

    expect(
      header
        .find("Title")
        .children()
        .text()
    ).toEqual("Manage Customers");
  });
});
