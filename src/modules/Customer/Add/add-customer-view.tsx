import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators, ActionCreatorsMapObject } from 'redux';
import { Grid } from '@material-ui/core';
import { CustomerForm } from '../shared-components/customer-form';
import { ICustomer } from '../../../entities';
import { AddCustomerActions } from './actions';
import { customersReducer } from '../reducers/customers-reducer';



interface IAddCustomerState {
    customers: ICustomer[];
}

interface IAddCustomerProps {
    actions: ActionCreatorsMapObject;
    customers: ICustomer[];
    history: any;
}


export class AddCustomer extends React.Component<IAddCustomerProps, IAddCustomerState> {
    constructor(props: any, context: any) {
        super(props, context);

        this.handleSave = this.handleSave.bind(this);

    }

    handleSave(customer: ICustomer) {
        let customerDOB = new Date(customer.dob);
        customer.dob = customerDOB;

        this.props.actions.AddCustomer(customer);

        this.navigatetoManageCustomers();
    }

    navigatetoManageCustomers() {
        this.props.history.push('/customers');
    }

    render() {
        const totalCustomers: number = this.props.customers.length;

        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <h1>Add customer</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <CustomerForm mode="Add" total={totalCustomers} onSave={this.handleSave}></CustomerForm>
                    </Grid>
                </Grid>
            </div>

        );
    }
}

function mapStateToProps(state: IAddCustomerState, ownProps: IAddCustomerProps) {
    return {
        customers: state.customers
    }
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        actions: bindActionCreators(AddCustomerActions, dispatch)
    }
}


export const AddCustomerView = connect(mapStateToProps, mapDispatchToProps)(AddCustomer);