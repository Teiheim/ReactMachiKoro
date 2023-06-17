import * as React from "react";
import Typography from "@mui/material/Typography";
import { MachiKoroCard } from "../types";
import { ColorButton } from "../MachiButton/MachiButton";
import { CardHeader } from "@mui/material";
import { useState } from "react";
import { getColor } from "../utils";
import {
  StyledMachiCard,
  StyledMachiCardHeader,
  StyledMachiCardMedia,
  StyledMachiCardContent,
  StyledMachiCardActions,
} from "./MachiCardStyles";
import { Grid } from "@mui/material";

const flexItemStyle = {
  display: "block",
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: "auto",
  alignSelf: "auto",
  order: 0,
  width: "100%",
};

export default function MediaCard({
  card,
  color,
}: {
  card: MachiKoroCard;
  color: "blue" | "red" | "green" | "purple";
}) {
  return (
    <StyledMachiCard color={getColor(color)}>
      <StyledMachiCardHeader
        title={card.structure.cardName}
        subheader={`Industry: ${card.structure.industry}`}
        subheaderTypographyProps={{
          color: "white",
          fontWeight: 700,
          fontSize: "100%",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "white", fontWeight: 700, fontSize: "100%" }}
        >
          {card.structure.cardName}
        </Typography>
      </StyledMachiCardHeader>
      <StyledMachiCardMedia
        sx={{ height: 140 }}
        //Temporary Until I can get images for the cards
      />
      <StyledMachiCardContent>
        <Typography variant="body2" color="white" fontWeight="700">
          <div>Activation: {card.structure.activation}</div>
          <div>Income: {card.structure.price}</div>
          <div>Price: {card.structure.price}$</div>
          <div>Amount: {card.amount}</div>
        </Typography>
      </StyledMachiCardContent>
      <StyledMachiCardActions>
        <ColorButton sx={{ width: "100%" }}>Buy</ColorButton>
      </StyledMachiCardActions>
    </StyledMachiCard>
  );
}
