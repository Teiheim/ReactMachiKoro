import React from "react";
import Chip from "@mui/material/Chip";
import { getColor } from "../utils";
import styled from "@emotion/styled";
import { machiKoroCards } from "../cardLibrary";

export const StyledMachiChip = styled(Chip)<any>`
  background-color: ${(props) => {
    console.log("Styled MC", props);
    return getColor(machiKoroCards[props.label].structure.color);
  }};
  color: white;
  font-weight: 700;
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 1);
  border: 2px solid black;
`;
