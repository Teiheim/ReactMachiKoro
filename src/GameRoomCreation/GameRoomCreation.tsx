import * as React from 'react';
import { Container, Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { ColorButton as MachiButton } from '../MachiButton/MachiButton';

export const GameRoomCreation = ({ createGame }) => {
  const [players, setPlayers] = React.useState([]);
  const [playerName, setPlayerName] = React.useState('');
  const [error, setError] = React.useState(false);
  const checkPlayerName = () => {
    if (playerName !== '') {
      setPlayers([{ playerName: playerName }]);
    } else {
      setPlayerName(''), setError(true);
    }
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        borderSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f2f2f2',
          padding: '16px',
          borderRadius: '4px',
          width: '100%',
          height: '50%',
          boxShadow: '2px 2px 0px 0px rgba(0, 0, 0, 1)',
          border: '2px solid black',
        }}
      >
        <Stack spacing={1}>
          <Typography variant="h1" textAlign="center" display="block">
            {'Machi Koro'}
          </Typography>
          <TextField
            helperText={'Username is Empty'}
            error={error}
            label="Player Name"
          ></TextField>
          <MachiButton onClick={checkPlayerName()}>Create Game</MachiButton>
        </Stack>
      </Box>
    </Container>
  );
};
