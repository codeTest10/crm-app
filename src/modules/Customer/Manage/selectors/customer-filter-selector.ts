import { createSelector } from "reselect";
import { ICustomer } from "../../../../entities";

const getCustomers = (state: any, props: any) => state;

export const filterCustomer = createSelector(
  [getCustomers, (state: any, props) => props],
  (customers, text) => {
    return customers.filter((customer: ICustomer) =>
      customer.firstName.match(new RegExp(text, "i"))
    );
  }
);
