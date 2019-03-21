import { Action, ActionCreatorsMapObject, Dispatch, ActionCreator } from "redux";
import { ICustomer } from "../../../../entities";
import { Types } from "./types";
import { ICustomerAction } from "../../common/actionDefinition";



export const AddCustomerActions: ActionCreatorsMapObject = {
    AddCustomer
}

export function AddCustomerAction(customer: ICustomer): ICustomerAction {
    return {
        type: Types.ADD_CUSTOMER,
        customer
    }
}
export function AddCustomerSuccessAction(): ICustomerAction {
    return {
        type: Types.ADD_CUSTOMERS_SUCCESS
    }
}

export function AddCustomer(customer: ICustomer): any {
    return function (dispatch: Dispatch<any>) {
       
        dispatch(AddCustomerAction(customer));
        
        dispatch(AddCustomerSuccessAction());
    }
}

