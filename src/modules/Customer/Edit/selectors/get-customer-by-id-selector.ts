import { createSelector } from "reselect";

const getCustomers = (state: any, props: any) => state;

export const getCustomerById = createSelector(
  [getCustomers, (state: any, props) => props],
  (customers, customerId) => {
    return customers.filter((customer: any) => {
      return customer.id === parseInt(customerId);
    })[0];
  }
);
