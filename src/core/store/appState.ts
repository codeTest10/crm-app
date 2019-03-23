import { ICustomer } from "../../entities";

export interface IManageCustomerUI {
  filterText: string;
}

export interface IAppState {
  customers: ICustomer[];
  manageCustomerUI: IManageCustomerUI;
}

export const AppState: IAppState = {
  customers: [],
  manageCustomerUI: {
    filterText: ""
  }
};
