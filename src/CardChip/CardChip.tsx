import * as React from "react";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import { StyledMachiChip } from "./CardChipStyles";
import { getColor } from "../utils";

export const CardChip = ({ cardCount, cardName }: any) => {
  console.log("Card Inspect");
  console.log("Card Name", cardName);
  //console.log("Card Itself", machiKoroCards[props.structure.cardName]);
  return (
    <StyledMachiChip
      avatar={
        cardCount ? (
          <Avatar
            sx={{
              backgroundColor: "#ffd400",
              color: "#000",
              fontWeight: 700,
              border: "2px solid black",
            }}
          >
            {cardCount}
          </Avatar>
        ) : (
          ""
        )
      }
      label={cardName}
    ></StyledMachiChip>
  );
};
