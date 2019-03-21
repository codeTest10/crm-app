import * as React from 'react';

import { Formik, Field, Form } from 'formik';
import { LinearProgress, Button, Grid, CircularProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { ICustomer } from '../../../entities';
import { validateCustomer } from './customer-form-validate';
import moment from 'moment';


interface ICustomerFormProps {
    onSave: any
    customer?: any
    mode: string
    total?: any
}

export const CustomerForm: React.FunctionComponent<ICustomerFormProps> = (props: ICustomerFormProps) => {

    const { onSave, customer, mode } = props;
    let total = props.total + 1;


    return (
        <Formik
            initialValues={
                {
                    id: mode === 'Edit' ? customer.id : total,
                    firstName: mode === 'Edit' ? customer.firstName : '',
                    lastName: mode === 'Edit' ? customer.lastName : '',
                    dob: mode === 'Edit' ? moment(customer.dob).format('YYYY-MM-DD') : ''
                }}
            validate={(customer: ICustomer) => validateCustomer(customer)}
            onSubmit={(customer, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false);
                    onSave(customer);
                }, 2000);
            }}
            render={({ submitForm, isSubmitting }) => (
                <Form>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Field
                                type="text"
                                label="First Name"
                                name="firstName"
                                component={TextField}
                                InputLabelProps={{ shrink: true }} />

                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                type="text"
                                label="Last Name"
                                name="lastName"
                                component={TextField}
                                InputLabelProps={{ shrink: true }} />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                type="date"
                                label="Birthday"
                                name="dob"
                                component={TextField}
                                InputLabelProps={{ shrink: true }} />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting}
                                onClick={submitForm}>
                                {isSubmitting ? <CircularProgress /> : 'Submit'}
                            </Button>
                        </Grid>
                    </Grid>

                </Form>
            )}
        />

    );
}
