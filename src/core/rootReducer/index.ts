import { combineReducers } from "redux";
import { customersReducer } from "../../modules/Customer/reducers/customers-reducer";
import { manageCustomerUIReducer } from "../../modules/Customer/Manage/reducers/manage-customer-ui-reducer";

export const rootReducer = combineReducers({
  customers: customersReducer,
  manageCustomerUI: manageCustomerUIReducer
});
