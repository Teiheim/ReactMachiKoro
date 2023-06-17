import * as React from "react";
import Stack from "@mui/material/Stack";
import { CardChip } from "./CardChip/CardChip";
import { Player, City, MachiKoroGame } from "./types";
import { Typography } from "@mui/material";

const generatePlayerCity = (city: City[]) => {
  return city.map((business, index) => (
    <CardChip
      key={index}
      cardCount={business.amount}
      cardName={business.cardName}
    />
  ));
};

export const PlayerPane: React.FC<{ player: Player }> = (props) => {
  const { player } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center horizontally
      }}
    >
      <Typography mb="5vh" variant="h3" color={"white"} textAlign={"center"}>
        {player.playerName}
      </Typography>
      <Stack justifyContent={"center"} width={"90%"} spacing={2}>
        {generatePlayerCity(player.city)}
      </Stack>
    </div>
  );
};
