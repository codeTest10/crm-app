import * as React from "react";
import { shallow } from "enzyme";
import { EditCustomer } from "./edit-customer-view";
import { ICustomer } from "../../../entities";

function renderEditCustomer(args: any) {
  return shallow(<EditCustomer {...args} />);
}

describe("Edit customer View", () => {
  let wrapper: any;

  let mockCustomer: ICustomer = {
    id: 1,
    firstName: "Ben",
    lastName: "test",
    dob: "23-08-1989"
  };

  beforeEach(() => {
    wrapper = renderEditCustomer({
      actions: { UpdateCustomer: jest.fn() },
      customer: mockCustomer,
      history: { push: jest.fn() }
    });
  });

  it("should dispatch update action upon saving ", () => {
    wrapper.instance().handleSave(mockCustomer);

    expect(wrapper.instance().props.actions.UpdateCustomer).toHaveBeenCalled();
  });

  it("should navigate back after saving  ", () => {
    wrapper.instance().handleSave(mockCustomer);

    expect(wrapper.instance().props.history.push).toHaveBeenCalled();
  });
});
