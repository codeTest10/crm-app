import { Types as ManageActionTypes } from "../actions";
import { AppState } from "../../../../core/store/appState";

export function manageCustomerUIReducer(
  state = AppState.manageCustomerUI,
  action: any
) {
  switch (action.type) {
    case ManageActionTypes.FILTER_CUSTOMERS:
      return { ...state, filterText: action.payload };

    default:
      return state;
  }
}
