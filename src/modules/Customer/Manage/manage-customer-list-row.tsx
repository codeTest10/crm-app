import * as React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { ICustomer } from "../../../entities";
import {
  TableRow,
  TableCell,
  Fab,
  Icon,
  IconButton,
  Fade
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

interface ICustomerListRowProps {
  item: ICustomer;
  onDeleteItem: Function;
}

export const CustomerListRow: React.FunctionComponent<ICustomerListRowProps> = (
  props: ICustomerListRowProps
) => {
  const { item, onDeleteItem } = props;

  return (
    <TableRow key={item.id}>
      <TableCell component="th" scope="row">
        {item.firstName}
      </TableCell>
      <TableCell align="center">{item.lastName}</TableCell>
      <TableCell align="center">{item.dob.toDateString()}</TableCell>
      <TableCell align="center">
        <IconButton aria-label="Edit" color="primary">
          <Link to={`/customer/${item.id}`}>
            <EditIcon />
          </Link>
        </IconButton>
      </TableCell>
      <TableCell align="center">
        <IconButton
          aria-label="Delete"
          color="primary"
          onClick={() => {
            onDeleteItem(item.id);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
