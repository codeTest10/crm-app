import * as React from "react";
import {filterCustomerAction } from "../actions";
import { manageCustomerUIReducer } from "./manage-customer-ui-reducer";
import { IManageCustomerUI } from "../../../../core/store/appState";


describe("Manage customer ui reducer", () => {
  it("should update filter to the state", () => {
    const initialState:IManageCustomerUI = {filterText:''};
    const filterText = "John";

    const action = filterCustomerAction(filterText);
    
    const newState = manageCustomerUIReducer(initialState, action);
   
    expect(newState.filterText).toEqual(filterText);
  });
});
