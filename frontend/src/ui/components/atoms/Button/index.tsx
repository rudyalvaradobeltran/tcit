import { FC } from "react";
import { Button as MaterialButton } from "@mui/material";
import IButton from "./interface";

const Button: FC<IButton> = ({ label, onClick }: IButton) => {
  return (
    <>
      <MaterialButton variant="contained" onClick={(e: any) => onClick(e)}>
        {label}
      </MaterialButton>
    </>
  );
};

export default Button;
