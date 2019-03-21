import { combineReducers, Action } from 'redux';
import { customersReducer } from '../../modules/Customer/reducers/customers-reducer';
import { customersSearchReducer } from '../../modules/Customer/reducers/customer-search-reducer';



export const rootReducer = combineReducers({
    customers: customersReducer,
    customerFilter: customersSearchReducer
});