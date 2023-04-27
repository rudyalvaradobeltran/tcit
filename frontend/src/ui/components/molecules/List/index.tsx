/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "../../atoms/Table";
import IList from "./interface";
import Styles from "./styles";

const List: FC<IList> = ({ rows }: IList) => {
  return (
    <Styles>
      <TableContainer className="container" component={Paper}>
        <Table rows={rows} />
      </TableContainer>
    </Styles>
  );
};

export default List;
