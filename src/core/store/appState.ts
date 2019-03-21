import { ICustomer } from "../../entities";

export interface IAppState {
  customers: ICustomer[];
  filterText: string;
}

export const AppState: IAppState = {
  customers: [],
  filterText: ""
};
