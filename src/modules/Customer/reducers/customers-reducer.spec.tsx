import { ICustomer } from "../../../entities";
import { AddCustomerAction } from "../Add/actions";
import { customersReducer } from "./customers-reducer";
import { UpdateCustomerAction } from "../Edit/actions";
import { deleteCustomerAction } from "../Manage/actions";

describe("Customer reducer", () => {
  let initialState: ICustomer[];
  
  beforeEach(() => {
    initialState = [{
        id: 1,
        firstName: "John",
        lastName: "Hard",
        dob: "23-09-1979"
      }];
  });

  it("should add customer when ADD_CUSTOMER action is called", () => {
    const customer: ICustomer = {
      id: 2,
      firstName: "Ben",
      lastName: "Rash",
      dob: "19-02-1969"
    };

    const action = AddCustomerAction(customer);

    const newState = customersReducer(initialState, action);

    expect(newState[1]).toEqual(customer);
    expect(newState.length).toEqual(2);
  });

  it("should update customer when UPDATE_CUSTOMER action is called", () => {
    const customer: ICustomer = {
      id: 1,
      firstName: "John-updated",
      lastName: "Hard-updated",
      dob: "16-08-1979"
    };

    const action = UpdateCustomerAction(customer);

    const newState = customersReducer(initialState, action);

    expect(newState[0]).toEqual(customer);
  });

  it("should delete customer when DELETE_CUSTOMER action is called", () => {  

    const action = deleteCustomerAction(1);

    const newState = customersReducer(initialState, action);

    expect(newState.length).toEqual(0);
  });
});
