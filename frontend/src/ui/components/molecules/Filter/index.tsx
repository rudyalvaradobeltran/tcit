import { FC, useState } from 'react';
import Grid from "@mui/material/Grid";
import TextField from "../../atoms/TextField";
import Button from "../../atoms/Button";
import { IFilter } from './interface';
import Styles from './styles';

const Filter: FC<IFilter> = ({ searchPostsByName }: IFilter) => {
  const [search, setSearch] = useState('');

  return (
    <Styles>
      <Grid className="container" container spacing={2}>
        <Grid xs={6} item={true} >
          <TextField label="Filter by Name" name="search" onChange={(e: any) => setSearch(e.target.value)} value={search} />
        </Grid>
        <Grid xs={6} item={true} >
          <Button label="Search" onClick={() => searchPostsByName(search)} />
        </Grid>
      </Grid>
    </Styles>
  );
};

export default Filter;
