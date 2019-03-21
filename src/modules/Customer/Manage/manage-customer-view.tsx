import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { CustomerList } from './manage-customer-list';
import { ICustomer } from '../../../entities';
import { ManageCustomerActions } from './actions';
import { Button, Grid, Paper, TextField } from '@material-ui/core';
import { IAppState } from '../../../core/store/appState';
import { filterCustomer } from './selectors/customer-filter-selector';



interface IManageCustomerState {
    customers: ICustomer[];
}

interface IManageCustomerProps {
    actions: any;
    customers: ICustomer[];
    history: any;
}

export class ManageCustomer extends React.Component<IManageCustomerProps, IManageCustomerState> {

    constructor(props: IManageCustomerProps, context: any) {
        super(props, context);

        this.redirectToAddCustomerView = this.redirectToAddCustomerView.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    redirectToAddCustomerView() {
        this.props.history.push('/customer');
    }

    handleDelete(id: number) {
        this.props.actions.deleteCustomerById(id);
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        let target: HTMLInputElement = event.target;
        let filterText = target.value

        this.props.actions.filterCustomerByName(filterText);
    };

    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <h1>Manage Customers</h1>
                    </Grid>

                    <Grid item xs={9}>
                        <Button variant="contained" color="primary" onClick={this.redirectToAddCustomerView}>Add Customer</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField label="Search by name" margin="normal" onChange={this.handleChange} />
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper>
                            <CustomerList customers={this.props.customers} onDeleteCustomer={this.handleDelete} />
                        </Paper>
                    </Grid>
                </Grid>
            </div>

        );
    }
}


function mapStateToProps(state: any) {
    debugger;
    return {
        customers: filterCustomer(state.customers, state.customerFilter),
        customerFilter: state.customerFilter
    }
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        actions: bindActionCreators(ManageCustomerActions, dispatch)
    }
}


export const ManageCustomerView = connect(mapStateToProps, mapDispatchToProps)(ManageCustomer);