import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators, ActionCreatorsMapObject } from 'redux';
import { Grid } from '@material-ui/core';
import { CustomerForm } from '../shared-components/customer-form';
import { ICustomer } from '../../../entities';
import { UpdateCustomerActions } from './actions';
import { getCustomerById } from './selectors/get-customer-by-id-selector';





interface IEditCustomerState {
    customers: ICustomer[]
}

interface IEditCustomerProps {
    match: any
    actions: ActionCreatorsMapObject
   customer:any
    history: any
    totalCustomers:number;
}


export class EditCustomer extends React.Component<IEditCustomerProps, IEditCustomerState> {
    constructor(props: any, context: any) {
        super(props, context);

        this.handleSave = this.handleSave.bind(this);

    }

    handleSave(customer: ICustomer) {
        let customerDOB = new Date(customer.dob)
        customer.dob = customerDOB;

        this.props.actions.UpdateCustomer(customer);

        this.navigatetoManageCustomers();
    }

    navigatetoManageCustomers() {
        this.props.history.push('/customers');
    }

    render() {
        const {customer}=this.props;

        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <h1>Edit customer</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <CustomerForm mode="Edit"  onSave={this.handleSave} customer={customer}></CustomerForm>
                    </Grid>
                </Grid>
            </div>

        );
    }
}

function mapStateToProps(state: IEditCustomerState, ownProps: IEditCustomerProps) {
    return {
        customer: getCustomerById(state.customers, ownProps.match.params.id)
    }
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        actions: bindActionCreators(UpdateCustomerActions, dispatch)
    }
}


export const EditCustomerView = connect(mapStateToProps, mapDispatchToProps)(EditCustomer);