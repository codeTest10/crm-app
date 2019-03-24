import { ICustomer } from "../../../../entities";
import { filterCustomer } from "./customer-filter-selector";

let mockCustomerState: ICustomer[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Mave",
    dob: new Date(1993, 6, 28, 14, 39, 7)
  },
  {
    id: 2,
    firstName: "Jonathan",
    lastName: "Ram",
    dob: new Date(1998, 1, 28, 14, 39, 7)
  }
];

describe("Customer Filte Selector", () => {
  beforeEach(() => {});

  it("should return multiple customers", () => {
    let result: ICustomer[] = filterCustomer(mockCustomerState, "Jo");

    expect(result.length).toEqual(2);
  });
});
