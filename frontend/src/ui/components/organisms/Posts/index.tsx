import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Filter from "../../molecules/Filter";
import Form from "../../molecules/Form";
import List from "../../molecules/List";
import { postActions } from '../../../../application/actions/post';
import { ITableRow } from "../../atoms/Table/interface";

const Posts = () => {
  const rows: Array<ITableRow> = useSelector((store: any) => store.entities.post.posts);
  const [filteredRows, setFilteredRows] = useState([...rows]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postActions.fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredRows([...rows]);
  }, [rows]);

  const searchPostsByName = (search: string) => {
    if (search !== '') {
      setFilteredRows([...rows].filter((row: ITableRow) => row.name.includes(search)));
    } else {
      setFilteredRows([...rows]);
    }
  }

  return (
    <>
      <Filter searchPostsByName={searchPostsByName} />
      <List rows={filteredRows} />
      <Form />
    </>
  );
};

export default Posts;
