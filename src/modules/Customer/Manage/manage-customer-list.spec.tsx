import * as React from "react";
import { shallow } from "enzyme";

import { ICustomer } from "../../../entities";
import { CustomerList } from "./manage-customer-list";


let mockCustomers: ICustomer[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Mave",
    dob: new Date(1993, 6, 28, 14, 39, 7)
  },
  {
    id: 2,
    firstName: "Ben",
    lastName: "Voski",
    dob: new Date(1993, 6, 28, 14, 39, 7)
  }
];

function renderCustomerList(args: any) {
  const defaultProps = {
    customers: [],
    onDeleteCustomer: () => {}
  };

  const props = { ...defaultProps, ...args };

  return shallow(<CustomerList {...props} />);
}

describe("Manage customer list", () => {
  it("should render customer list row component twice", () => {
    const wrapper = renderCustomerList({ customers: mockCustomers });

    expect(wrapper.find("CustomerListRow").length).toEqual(2);
  });

  it("mock customer item should match customer row item", () => {
    const wrapper = renderCustomerList({ customers: mockCustomers });
   
    expect(wrapper.find("CustomerListRow").at(0).prop('item')).toEqual(mockCustomers[0]);
    expect(wrapper.find("CustomerListRow").at(1).prop('item')).toEqual(mockCustomers[1]);
  });
});
