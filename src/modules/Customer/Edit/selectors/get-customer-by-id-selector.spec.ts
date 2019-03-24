import * as React from "react";
import { shallow } from "enzyme";
import { getCustomerById } from "./get-customer-by-id-selector";
import { ICustomer } from "../../../../entities";

let mockCustomerState: ICustomer[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Mave",
    dob: new Date(1993, 6, 28, 14, 39, 7)
  },
  {
    id: 2,
    firstName: "Ben",
    lastName: "Ram",
    dob: new Date(1998, 1, 28, 14, 39, 7)
  }
];

describe("Get Customer By Id Selector", () => {
  beforeEach(() => {});

  it("should match the customer by id", () => {
    let expected = {
      id: 1,
      firstName: "John",
      lastName: "Mave",
      dob: new Date(1993, 6, 28, 14, 39, 7)
    };
    let result: ICustomer = getCustomerById(mockCustomerState, 1);
    expect(result).toEqual(expected);
  });
});
