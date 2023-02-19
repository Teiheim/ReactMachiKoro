import * as React from 'react';
import { GameUI } from './GameUI/GameUI';
import './style.css';
import { PlayingCard } from './styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const machiRed = '#3b350ff';
const machiGreen = '#534d2b';
const machiBlue = '#4c4f70';
const machiPurple = '#732f48';

const CardComponentOld = (props: any) => {
  return <PlayingCard></PlayingCard>;
};
const MachCardDescription = ({ description }: any) => {
  return (
    <Box
      sx={{
        width: '90%',
        border: '1vw',
        height: '20%',
        backgroundColor: 'rgba(0,0,0,0.1)',
        color: 'white',
        fontSize: '.8vw',
      }}
    >
      {description}
    </Box>
  );
};

const MachiCardHeader = ({ title, diceActivation }: any) => {
  return (
    <Grid container spacing={1}>
      <Grid item>
        <Box sx={{ border: 1, borderColor: 'white' }}>{diceActivation}</Box>
      </Grid>
      <Grid item>
        <CardHeader title={title} sx={{ m: 0, p: 0 }} />
      </Grid>
    </Grid>
  );
};

const MachiCard = ({
  cardColor,
  cardName,
  description,
  diceActivation,
  cost,
}: any) => {
  return (
    <Box sx={{ width: '10vw', height: '14vw' }}>
      <Card
        sx={{
          width: '10vw',
          height: '14vw',
          border: 5,
          borderColor: machiPurple,
          backgroundColor: machiPurple,
          color: 'white',
        }}
      >
        <Stack
          spacing={1}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{ height: '100%' }}
        >
          <MachiCardHeader title={'Machi'} />
          <CardContent sx={{ padding: 0, margin: '0 auto' }}>
            <Box
              sx={{ width: '90%', height: '5vw', backgroundColor: 'white' }}
            ></Box>
          </CardContent>
          <MachCardDescription description={'Testing text here'} />
        </Stack>
      </Card>
    </Box>
  );
};

export default function App() {
  return (
    <GameUI>
      <div>
        <MachiCard></MachiCard>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :^)</p>
        <Box sx={{ width: '10vw', height: '14vw' }}>
          <Card
            sx={{
              width: '10vw',
              height: '14vw',
              border: 5,
              borderColor: machiPurple,
              backgroundColor: machiPurple,
              color: 'white',
            }}
          >
            <Stack spacing={1}>
              <CardHeader title="Card" />
              <CardContent>
                <Box
                  sx={{ width: '90%', height: '5vw', backgroundColor: 'white' }}
                ></Box>
              </CardContent>
            </Stack>
          </Card>
        </Box>
      </div>
    </GameUI>
  );
}
