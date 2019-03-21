import { ICustomer } from "../../../entities";

interface CustomerFormValues {
  id: number;
  firstName: string;
  lastName: string;
  dob: string;
}

export const validateCustomer = (customer: ICustomer) => {
  const errors: Partial<CustomerFormValues> = {};
  if (!customer.firstName) {
    errors.firstName = "Required";
  }
  if (!customer.lastName) {
    errors.lastName = "Required";
  }
  if (!customer.dob) {
    errors.dob = "Required";
  }
  return errors;
};
