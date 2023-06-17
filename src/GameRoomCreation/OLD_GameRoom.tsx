import * as React from "react";
import { Container, Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { ColorButton as MachiButton } from "../MachiButton/MachiButton";
import {
  StyledGameRoomContainer,
  StyledGameRoomBox,
} from "./GameRoomStyles/GameRoomStyles";

export const GameRoomCreation = ({ createGame }) => {
  const [players, setPlayers] = React.useState([]);
  const [playerName, setPlayerName] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleUpdatePlayer = (idx, value) => {
    const updatedPlayers = [...players];
    updatedPlayers[idx].playerName = value;
    setPlayers(updatedPlayers);
  };

  const checkPlayerName = () => {
    console.log("Check");
    if (playerName !== "") {
      console.log(error);
      setError(false);
      setPlayers([
        { playerName: playerName },
        { playerName: "" },
        { playerName: "" },
        { playerName: "" },
      ]);
    } else {
      setPlayerName("");
      setError(true);
    }
  };
  return (
    <StyledGameRoomContainer
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        borderSizing: "border-box",
      }}
    >
      <StyledGameRoomBox
        sx={{
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f2f2f2",
          padding: "16px",
          borderRadius: "4px",
          width: "100%",
          height: "50%",
          boxShadow: "2px 2px 0px 0px rgba(0, 0, 0, 1)",
          border: "2px solid black",
          overflow: "scroll",
        }}
      >
        <Stack spacing={1}>
          <Typography variant="h1" textAlign="center" display="block">
            {"Machi Koro"}
          </Typography>
          <TextField
            helperText={error ? "Username is Empty" : ""}
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            error={error}
            label="Player Name"
          ></TextField>
          <MachiButton onClick={() => checkPlayerName()}>
            Create Game
          </MachiButton>
          {players.map((value, index) => (
            <TextField
              key={index}
              value={value.playerName}
              onChange={(e) => handleUpdatePlayer(index, e.target.value)}
            />
          ))}
          {players.length === 4 && (
            <MachiButton onClick={() => createGame(players, "Default")}>
              Start Game!
            </MachiButton>
          )}
        </Stack>
      </StyledGameRoomBox>
    </StyledGameRoomContainer>
  );
};
