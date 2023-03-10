import * as React from 'react';
import { GameUI } from './GameUI/GameUI';
import './style.css';
import { PlayingCard } from './styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';

const machiRed = '#3b350ff';
const machiGreen = '#534d2b';
const machiBlue = '#0078cf';
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
        height: '30%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderColor: 'rgba(255,255,255,0.1)',
        color: 'white',
        fontSize: '.8vw',
        p: 1,
        borderRadius: '10%',
        //overflow: 'scroll',
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
  effectFn,
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
          spacing={'5%'}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{ height: '100%' }}
        >
          {/* <MachiCardHeader title={'Machi'} /> */}
          <CardHeader
            title={'Wheat Field'}
            sx={{ m: 0, p: 0, fontSize: '1.1vw' }}
            avatar={
              <Box sx={{ border: 1, borderColor: 'white', p: 0.3 }}>
                {/* {diceActivation} */}
                {'1'}
              </Box>
            }
          />
          <CardContent sx={{ padding: 0, margin: '0 auto', width: '100%' }}>
            <Box
              sx={{ width: '90%', height: '5vw', backgroundColor: 'white' }}
            ></Box>
          </CardContent>
          <MachCardDescription
            description={"Get 1 Coin From The Bank On Anyone's Turn "}
          />
        </Stack>
      </Card>
    </Box>
  );
};

export default function App() {
  return (
    <GameUI>
      {/* <div>
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
        <CardChip cardCount={1} cardName={'Wheat Field'}></CardChip>
      </div> */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <Paper
          sx={{
            width: '50%',
            height: '50%',
            backgroundColor: machiBlue,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box>
            <TextField color="primary" variant="filled" label="Game Room ID" />
            <Button>{'Primary'}</Button>
          </Box>
        </Paper>
      </Box>
    </GameUI>
  );
}

const CardChip = ({ cardCount, cardName }: any) => {
  return (
    <Chip
      avatar={cardCount ? <Avatar>{cardCount}</Avatar> : ''}
      label={cardName}
      sx={{ backgroundColor: machiBlue, color: 'white' }}
    ></Chip>
  );
};
