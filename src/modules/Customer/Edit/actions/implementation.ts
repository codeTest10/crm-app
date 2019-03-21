import {
  Action,
  ActionCreatorsMapObject,
  Dispatch,
  ActionCreator
} from "redux";
import { ICustomer } from "../../../../entities";
import { Types } from "./types";
import { ICustomerAction } from "../../common/actionDefinition";

export const UpdateCustomerActions: ActionCreatorsMapObject = {
  UpdateCustomer
};

export function UpdateCustomerAction(customer: ICustomer): ICustomerAction {
  return {
    type: Types.UPDATE_CUSTOMER,
    customer
  };
}
export function UpdateCustomerSuccessAction(): ICustomerAction {
  return {
    type: Types.UPDATE_CUSTOMERS_SUCCESS
  };
}

export function UpdateCustomer(customer: ICustomer): any {
  return function(dispatch: Dispatch<any>) {
    dispatch(UpdateCustomerAction(customer));

    dispatch(UpdateCustomerSuccessAction());
  };
}
