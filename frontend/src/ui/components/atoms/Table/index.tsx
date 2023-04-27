import { FC } from "react";
import { Table as MaterialTable } from "@mui/material";
import { useHistory } from "react-router";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from '../Button'
import { useDispatch } from 'react-redux';
import { postActions } from '../../../../application/actions/post';
import { ITable, ITableRow } from "./interface";

const Table: FC<ITable> = ({ rows }: ITable) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const deletePost = (id: number) => {
    dispatch(postActions.deletePost({ id }));
    history.go(0); // temporary refresh of page
  }

  return (
    <>
      <MaterialTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width="35%" align="left">Name</TableCell>
            <TableCell width="45%" align="left">Description</TableCell>
            <TableCell width="20%" align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: ITableRow) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left"><Button label="Delete" onClick={() => deletePost(row.id)} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MaterialTable>
    </>
  );
};

export default Table;
