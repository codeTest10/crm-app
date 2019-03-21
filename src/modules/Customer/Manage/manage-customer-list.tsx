import * as React from 'react';
import { CustomerListRow } from './manage-customer-list-row';
import { ICustomer } from '../../../entities';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';


const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.primary.light,
      fontSize: 18,
      color: theme.palette.common.white,
    },
    
  }))(TableCell);
  


export interface ICustomerListProps {
    customers: ICustomer[],
    onDeleteCustomer: any
}

export const CustomerList: React.FunctionComponent<ICustomerListProps> = (props: ICustomerListProps) => {
    
    const { customers ,onDeleteCustomer} = props;
    return (
        <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <CustomTableCell>First Name</CustomTableCell>
            <CustomTableCell align="center">Last Name</CustomTableCell>
            <CustomTableCell align="center">Date of Birth</CustomTableCell>
            <CustomTableCell align="center"></CustomTableCell>
            <CustomTableCell align="center"></CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map(customer => (
            <CustomerListRow key={customer.id} item={customer} onDeleteItem={onDeleteCustomer} ></CustomerListRow>
          ))}
        </TableBody>
      </Table>
    </Paper>

    );
}