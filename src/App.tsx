import * as React from 'react';
import { GameUI } from './GameUI/GameUI';
import './style.css';
import { PlayingCard } from './styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Accordion from '@mui/material/Accordion';
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

import { ColorButton } from './MachiButton/MachiButton';
import { CustomAccordion } from './BottomBar';
import MachiCard2 from './MachiCard/MachiCard';
import StructureCatalog from './StructureCatalog';
import { machiKoroCards } from './cardLibrary';
import { CardChip } from './CardChip/CardChip';
import { GameRoomCreation } from './GameRoomCreation/GameRoomCreation';
import { useMachiMachine } from './MachiKoro';
import { MainContainer } from './MachiKoroContainer';

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
  const card = machiKoroCards['Wheat Field'];

  const machi = useMachiMachine();
  console.log(machi.state);
  return <MainContainer></MainContainer>;
  //return <GameRoomCreation createGame={machi.createMachiRoom} />;
}
