import React from 'react';
import Chip from '@mui/material/Chip';
import { getColor } from '../utils';
import styled from '@emotion/styled';

export const StyledMachiChip = styled(Chip)`
  background-color: ${getColor('blue')};
  color: 'white';
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 1);
  border: 2px solid black;
`;
