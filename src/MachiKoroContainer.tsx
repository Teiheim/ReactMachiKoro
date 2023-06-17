import * as React from "react";
import { Box } from "@mui/material";
import { CustomAccordion } from "./BottomBar";
import { machiKoroCards } from "./cardLibrary";
import { MachiKoroGame } from "./types";
import SplitPane from "react-split-pane";
import { CardChip } from "./CardChip/CardChip";
import { City } from "./types";
import Stack from "@mui/material/Stack";
import { PlayerPane } from "./PlayerPane";

export const MainContainer: React.FC<{ machiContext: MachiKoroGame }> = (
  props
) => {
  const { machiContext } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        zIndex: 0,
        boxSizing: "border-box",
        "& > *:first-child": {
          flexGrow: 1,
          overflow: "auto",
        },
      }}
    >
      <Box sx={{ flex: "1 1 90%", bgcolor: "#C97D5D", zIndex: 0 }}>
        {/* Avoids Typescript Errors */}
        {React.createElement(
          SplitPane,
          { split: "vertical" },
          ...machiContext.players.map((player, index) =>
            React.createElement(PlayerPane, { key: index, player: player })
          )
        )}
        {/* <SplitPane
          split="vertical"
          // children={machiContext.players.map((player, index) => (
          //   <PlayerPane key={index} player={player} />
          // ))}
        ></SplitPane> */}
      </Box>
      <Box sx={{ flex: "1 1 10%", bgcolor: "secondary.main" }}>
        <CustomAccordion
          title={`Player`}
          content="Your content"
          machiKoroDeck={machiKoroCards}
        />
      </Box>

      {/* {machiContext.players.map((player) => {
          <Pane initialSize="25%" minSize="10%" maxSize="500px">
            <Stack>{generatePlayerCity(player.city)}</Stack>
          </Pane>;
        })} */}
    </Box>
  );
};
