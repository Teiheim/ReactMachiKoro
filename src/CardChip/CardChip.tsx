import * as React from 'react';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { getColor } from '../utils';

const CardChip = ({ cardCount, cardName }: any) => {
  return (
    <Chip
      avatar={cardCount ? <Avatar>{cardCount}</Avatar> : ''}
      label={cardName}
      sx={{ backgroundColor: getColor('blue'), color: 'white' }}
    ></Chip>
  );
};
