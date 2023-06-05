import * as React from 'react';
import Typography from '@mui/material/Typography';
import { MachiKoroCard } from '../types';
import { ColorButton } from '../MachiButton/MachiButton';
import { CardHeader } from '@mui/material';
import { useState } from 'react';
import { getColor } from '../utils';
import {
  StyledMachiCard,
  StyledMachiCardHeader,
  StyledMachiCardMedia,
  StyledMachiCardContent,
  StyledMachiCardActions,
} from './MachiCardStyles';

const flexItemStyle = {
  display: 'block',
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: 'auto',
  alignSelf: 'auto',
  order: 0,
  width: '100%',
};

export default function MediaCard({
  card,
  color,
}: {
  card: MachiKoroCard;
  color: 'blue' | 'red' | 'green' | 'purple';
}) {
  console.log(card);
  const [purchaseAmount, setAmount] = useState(0);
  const changePurchaseAmount = (sign: '+' | '-') => {
    sign === '+'
      ? setAmount(purchaseAmount + 1)
      : setAmount(purchaseAmount - 1);
  };
  return (
    <StyledMachiCard color={getColor(color)}>
      <StyledMachiCardHeader
        title={card.structure.cardName}
        sx={{ color: 'white', fontWeight: 700, fontSize: '100%' }}
        subheader={`Industry: ${card.structure.industry}`}
        subheaderTypographyProps={{
          color: 'white',
          fontWeight: 700,
          fontSize: '100%',
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: 'white' }}
        >
          {card.structure.cardName}
        </Typography>
      </StyledMachiCardHeader>
      <StyledMachiCardMedia
        sx={{ height: 140 }}
        //image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <StyledMachiCardContent>
        <Typography variant="body2" color="white" fontWeight="700">
          <div style={flexItemStyle}>
            Activation: {card.structure.activation}
          </div>
          <div style={flexItemStyle}>Income: {card.structure.price}</div>
          <div>Price: {card.structure.price}$</div>
          <div>Amount: {card.amount}</div>
        </Typography>
      </StyledMachiCardContent>
      <StyledMachiCardActions>
        <ColorButton>Buy</ColorButton>
        <ColorButton
          onClick={() => {
            if (purchaseAmount < card.amount) {
              changePurchaseAmount('+');
            }
          }}
        >
          +
        </ColorButton>
        <ColorButton
          onClick={() => {
            if (purchaseAmount > 0) {
              changePurchaseAmount('-');
            }
          }}
        >
          -
        </ColorButton>
        <ColorButton>{purchaseAmount}</ColorButton>
      </StyledMachiCardActions>
    </StyledMachiCard>
  );
}
