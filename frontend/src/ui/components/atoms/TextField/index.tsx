import { FC } from "react";
import { TextField as MaterialTextField } from "@mui/material";
import ITextField from "./interface";

const TextField: FC<ITextField> = ({ label, name, onChange, value }: ITextField) => {
  return (
    <>
      <MaterialTextField id="outlined-basic" label={label} name={name} variant="outlined" onChange={onChange} value={value} />
    </>
  );
};

export default TextField;
