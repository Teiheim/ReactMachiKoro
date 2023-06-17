import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { purple } from "@mui/material/colors";

export const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  fontWeight: 700,
  backgroundColor: "#ffd400",
  "&:hover": {
    backgroundColor: "#cfac00",
  },
  border: "2px solid black",
  borderRadius: "10px",
  boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)",
}));
