import { AppState } from "../../../core/store/appState";
import { Types as ManageActionTypes } from "../Manage/actions";

export function customersSearchReducer(
  state = AppState.filterText,
  action: any
) {
  switch (action.type) {
    case ManageActionTypes.FILTER_CUSTOMERS:
      return action.payload;

    default:
      return state;
  }
}
