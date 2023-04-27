interface ITable {
  rows: Array<ITableRow>;
}

interface ITableRow {
  id: number;
  name: string;
  description: string;
}

export type { ITable, ITableRow };
