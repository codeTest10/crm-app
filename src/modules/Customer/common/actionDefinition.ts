import { ICustomer } from "../../../entities";
import { Action } from "redux";

export interface ICustomerAction extends Action {
  customer?: ICustomer;
  customers?: ICustomer[];
  payload?: any;
}
