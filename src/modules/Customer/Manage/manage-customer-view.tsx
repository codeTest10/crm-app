import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { CustomerList } from "./manage-customer-list";
import { ICustomer } from "../../../entities";
import { ManageCustomerActions } from "./actions";
import { Button, Grid, Paper, TextField } from "@material-ui/core";
import { IAppState, IManageCustomerUI } from "../../../core/store/appState";
import { filterCustomer } from "./selectors/customer-filter-selector";
import { Header } from "../../../core/components";

interface IManageCustomerState {
  customers: ICustomer[];
}

interface IManageCustomerProps {
  actions: any;
  customers: ICustomer[];
  history: any;
  ui: IManageCustomerUI;
}

export class ManageCustomer extends React.Component<
  IManageCustomerProps,
  IManageCustomerState
> {
  constructor(props: IManageCustomerProps, context: any) {
    super(props, context);

    this.redirectToAddCustomerView = this.redirectToAddCustomerView.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    //Clear the filter when the page reloads   
    this.props.actions.filterCustomerByName('');
  }

  redirectToAddCustomerView() {
    this.props.history.push("/customer");
  }

  handleDelete(id: number) {
    this.props.actions.deleteCustomerById(id);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    let target: HTMLInputElement = event.target;
    let filterText = target.value;

    this.props.actions.filterCustomerByName(filterText);
  }

  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Header>Manage Customers</Header>
          <Grid item xs={9}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.redirectToAddCustomerView}
            >
              Add Customer
            </Button>
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Search by name"
              margin="normal"
              value={this.props.ui.filterText}
              onChange={this.handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper>
              <CustomerList
                customers={this.props.customers}
                onDeleteCustomer={this.handleDelete}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state: IAppState) {
  return {
    customers: filterCustomer(
      state.customers,
      state.manageCustomerUI.filterText
    ),
    ui: state.manageCustomerUI
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    actions: bindActionCreators(ManageCustomerActions, dispatch)
  };
}

export const ManageCustomerView = connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCustomer);
