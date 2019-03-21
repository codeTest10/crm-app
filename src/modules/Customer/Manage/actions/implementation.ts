import { Action, ActionCreatorsMapObject, Dispatch, ActionCreator } from "redux";
import { ICustomer } from "../../../../entities";
import { Types } from "./types";
import { mockCustomers } from "../../../../mocks/customer";
import { ICustomerAction } from "../../common/actionDefinition";


export const ManageCustomerActions: ActionCreatorsMapObject = {    
    loadCustomers,   
    filterCustomerByName,
    deleteCustomerById
}

export function loadCustomersSuccessAction(customers: ICustomer[]):ICustomerAction {
    return {
        type: Types.LOAD_CUSTOMERS_SUCCESS,
        customers
    }
}
export function deleteCustomerSuccessAction(customers: ICustomer[]):ICustomerAction {
    return {
        type: Types.DELETE_CUSTOMERS_SUCCESS,

    }
}
export function deleteCustomerAction(id: number):ICustomerAction {
    return {
        type: Types.DELETE_CUSTOMER,
        payload: id
    }
}

export function filterCustomerAction(filterText: string):ICustomerAction {
    return {
        type: Types.FILTER_CUSTOMERS,
        payload: filterText
    }
}

export function loadCustomers(): any {
    return function (dispatch: Dispatch<any>) {
        dispatch(loadCustomersSuccessAction(mockCustomers));
    }
}

export function deleteCustomerById(id: number): any {   
    return function (dispatch: Dispatch<any>) {      
        dispatch(deleteCustomerAction(id));
    }
}

export function filterCustomerByName(filterText: string): any {   
    return function (dispatch: Dispatch<any>) {      
        dispatch(filterCustomerAction(filterText));
    }
}