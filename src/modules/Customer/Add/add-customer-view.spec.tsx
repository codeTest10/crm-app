import * as React from "react";
import { shallow } from "enzyme";
import { AddCustomer } from "./add-customer-view";
import { ICustomer } from "../../../entities";

function renderAddCustomer(args: any) {
  return shallow(<AddCustomer {...args} />);
}

describe("Add customer View", () => {
  let wrapper: any;

  let mockCustomer: ICustomer = {
    id: 1,
    firstName: "Ben",
    lastName: "test",
    dob: "23-08-1989"
  };

  beforeEach(() => {
    wrapper = renderAddCustomer({
      actions: { AddCustomer: jest.fn() },
      customers: [],
      history: { push: jest.fn() }
    });
  });
  
  it("should dispatch add action upon saving ", () => {
    wrapper.instance().handleSave(mockCustomer);

    expect(wrapper.instance().props.actions.AddCustomer).toHaveBeenCalled();
  });

  it("should navigate back after saving  ", () => {
    wrapper.instance().handleSave(mockCustomer);

    expect(wrapper.instance().props.history.push).toHaveBeenCalled();
  });
});
