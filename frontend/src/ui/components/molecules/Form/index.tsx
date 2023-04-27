import { useState, ChangeEvent } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import Grid from "@mui/material/Grid";
import TextField from "../../atoms/TextField";
import Button from "../../atoms/Button";
import { postActions } from '../../../../application/actions/post';
import validateForm from "../../../../utils/validateForm";
import Styles from "./styles";

const Form = () => {
  const [form, setForm] = useState({
    errors: {
      name: '',
      description: '',
    },
    name: '',
    description: '',
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSavePost = (e: MouseEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const { errors, ...noErrors } = form;
    const results = validateForm(noErrors);
    setForm((prevState) => ({ ...prevState, errors: results }));
    if (Object.entries(results).length === 0) {
      dispatch(postActions.savePost({ name: form.name, description: form.description }));
      setForm({
        errors: {
          name: '',
          description: '',
        },
        name: '',
        description: '',
      });
      history.go(0); // temporary refresh of page
    }
  }

  return (
    <Styles>
      <Grid container spacing={2}>
        <Grid className="grid" xs={5} item={true}>
          <TextField label="Name" name="name" onChange={handleChange} value={form.name} />
          <small className="message">{form.errors.name}</small>
        </Grid>
        <Grid className="grid" xs={5} item={true}>
          <TextField label="Description" name="description" onChange={handleChange} value={form.description} />
          <small className="message">{form.errors.description}</small>
        </Grid>
        <Grid className="grid button" xs={2} item={true}>
          <Button label="Create" onClick={(e) => handleSavePost(e)} />
        </Grid>
      </Grid>
    </Styles>
  );
};

export default Form;
