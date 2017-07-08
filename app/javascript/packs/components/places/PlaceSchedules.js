import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderColumn,
  TableRowColumn,
} from "material-ui/Table";

const PlaceSchedules = (props) => {
  const rows = props.place.schedules.map((schedule) => {
    return (
      <TableRow key={schedule.id}>
        <TableRowColumn>{schedule.start_date}</TableRowColumn>
        <TableRowColumn>{schedule.max_users}</TableRowColumn>
        <TableRowColumn>{schedule.max_users}</TableRowColumn>
        <TableRowColumn>{schedule.price}</TableRowColumn>
        <TableRowColumn><a>Join</a></TableRowColumn>
      </TableRow>
    );
  });
  return (
    <div>
      <Table multiSelectable={false}>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Limit</TableHeaderColumn>
            <TableHeaderColumn>Remain</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn />
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} stripedRows>
          {rows}
        </TableBody>
      </Table>
    </div>
  );
};

export default PlaceSchedules;
