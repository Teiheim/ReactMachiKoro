import * as React from 'react';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { StyledMachiChip } from './CardChipStyles.tsx';
import { getColor } from '../utils';

export const CardChip = ({ cardCount, cardName }: any) => {
  return (
    <StyledMachiChip
      avatar={
        cardCount ? (
          <Avatar
            sx={{
              backgroundColor: '#ffd400',
              color: 'white',
              fontWeight: 700,
              border: '2px solid black',
            }}
          >
            {cardCount}
          </Avatar>
        ) : (
          ''
        )
      }
      label={cardName}
    ></StyledMachiChip>
  );
};
