import { AppState } from "../../../core/store/appState";
import { Types as ManageActionTypes } from "../Manage/actions";
import { Types as AddActionTypes } from "../Add/actions";
import { Types as UpdateActionTypes } from "../Edit/actions";

export function customersReducer(state = AppState.customers, action: any) {
  switch (action.type) {
    case AddActionTypes.ADD_CUSTOMER:
      return [...state, Object.assign({}, action.customer)];

    case AddActionTypes.ADD_CUSTOMERS_SUCCESS:
      return state;

    case UpdateActionTypes.UPDATE_CUSTOMER:
      return [
        ...state.filter(state => state.id !== action.customer.id),
        Object.assign({}, action.customer)
      ];

    case UpdateActionTypes.UPDATE_CUSTOMERS_SUCCESS:
      return state;

    case ManageActionTypes.LOAD_CUSTOMERS_SUCCESS:
      return action.customers;

    case ManageActionTypes.DELETE_CUSTOMER:
      const customerId = action.payload;
      return state.filter(({ id }) => id !== customerId);

    default:
      return state;
  }
}
