import * as React from "react";
import { shallow } from "enzyme";

import { CustomerListRow } from "./manage-customer-list-row";
import { ICustomer } from "../../../entities";

let customerMock: ICustomer = {
  id: 1,
  firstName: "John",
  lastName: "Mave",
  dob: new Date(1993, 6, 28, 14, 39, 7)
};

function renderCustomerListRow(args: any) {
  const defaultProps = {
    item: {},
    onDeleteItem: () => {}
  };

  const props = { ...defaultProps, ...args };

  return shallow(<CustomerListRow {...props} />);
}

describe("Manage customer list row", () => {
  it("row item should match firstname", () => {
    const wrapper = renderCustomerListRow({ item: customerMock });

    expect(
      wrapper
        .find("WithStyles(TableCell)")
        .at(0)
        .children()
        .text()
    ).toEqual("John");
  });

  it("row item should match lastname", () => {
    const wrapper = renderCustomerListRow({ item: customerMock });

    expect(
      wrapper
        .find("WithStyles(TableCell)")
        .at(1)
        .children()
        .text()
    ).toEqual("Mave");
  });

  it("row item should match dob", () => {
    const wrapper = renderCustomerListRow({ item: customerMock });

    expect(
      wrapper
        .find("WithStyles(TableCell)")
        .at(2)
        .children()
        .text()
    ).toEqual("Wed Jul 28 1993");
  });

  it("row item should contain correct customer nav link", () => {
    const wrapper = renderCustomerListRow({ item: customerMock });

    expect(
      wrapper
        .find("WithStyles(TableCell)")
        .find("Link")
        .props().to
    ).toEqual("/customer/1");
  });

  it("should raise delete event", () => {
    const mockOnDeleteCall = jest.fn();
    const wrapper = renderCustomerListRow({
      item: customerMock,
      onDeleteItem: mockOnDeleteCall
    });

    wrapper
      .find("WithStyles(IconButton)")
      .find('[aria-label="Delete"]')
      .simulate("click");
      
    expect(mockOnDeleteCall.mock.calls.length).toEqual(1);
  });
});
